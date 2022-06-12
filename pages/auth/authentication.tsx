// React
import React from 'react';
// Nextjs
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
// NextAuth
import { getProviders, signIn, getSession } from 'next-auth/react';
// Languages
import { useLanguage } from '@/contexts/LanguageContext';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false
});
// Utils
import { redirectTo } from '@/utils/index';
// Icons
import * as Icons from '@/icons/index';
import { unstable_getCurrent } from 'scheduler/tracing';

const Authentication: NextPage<any> = ({ providers }) => {
  const { dictionary, userLanguage } = useLanguage();
  const renderLogo: Function = (id: string) => {
    const Icon = Icons[`${id.capitalize()}Logo`]
    const IconSvg = (Icon && Icon({}) || []);

    return IconSvg
  };

  const providersButtons = (data: any) => {
    return Object.values(data).map((provider: any) => {
      return (
        <button
          key={provider.name}
          className="w-5/6 m-2 bg-secondary hover:bg-primary text-primary py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => signIn(provider.id)} >
          <div className="flex flex-grow">
            <span className="mr-2">{renderLogo(provider.id)}</span>
            <span>{provider.id.capitalize()}</span>
          </div>
        </button>
      )
    })
  }
  return (
    <Layout className="flex w-full justify-center mt-2 mb-6">
      <div className="w-min flex flex-col items-center align-middle mt-20">
        <p className="text-primary text-xl whitespace-nowrap">{dictionary.auth.title}</p>
        <hr className="w-full mt-2 mb-2 border-gray-400"/>
        {providersButtons(providers)}
      </div>
    </Layout>
  )
}

Authentication.getInitialProps = async (ctx) => {
  const { req, query } = ctx;
  const session = await getSession({ req });
  const { callbackUrl } = query;

  if(session) {
    if(callbackUrl) await redirectTo(callbackUrl.toString(), 301, null, ctx);
    else await redirectTo('/', 301, null, ctx);
  };

  return {
    session: undefined,
    providers: await getProviders()
  }
}

export default Authentication
