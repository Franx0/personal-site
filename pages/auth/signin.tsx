// React
import React from 'react';
// Nextjs
import { NextPage } from 'next';
// NextAuth
import { providers, signIn, getSession } from 'next-auth/client';
// Components
import Layout from '@/components/Layout';
// Utils
import { redirectTo } from '@/utils/index';
// Icons
import * as Icons from '@/icons/index';

const SignIn: NextPage<any> = ({ providers }) => {
  const renderLogo: Function = (iconName: string) => {
    const Icon = (Icons[`${iconName}Logo`] && Icons[`${iconName}Logo`]({}) || []);

    return Icon
  };

  return (
    <Layout className="flex w-full justify-center mt-2 mb-6">
      <div className="w-min flex flex-col items-center align-middle mt-20">
        <p className="text-primary text-xl">Sign in with:</p>
        <hr className="w-full mt-2 mb-2 border-gray-400"/>
        {Object.values(providers).map((provider: any) => (
          <button
            key={provider.name}
            className="m-2 bg-secondary hover:bg-primary text-primary py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => signIn(provider.id)} >
            <div className="flex flex-grow">
              <span className="mr-2">{renderLogo(provider.name)}</span>
              <span>{provider.name}</span>
            </div>
          </button>
        ))}
      </div>
    </Layout>
  )
}

SignIn.getInitialProps = async (ctx) => {
  const { req, query } = ctx;
  const session = await getSession({ req });
  const { callbackUrl } = query;

  if(session) {
    if(callbackUrl) await redirectTo(callbackUrl.toString(), 301, null, ctx);
    else await redirectTo('/', 301, null, ctx);
  };

  return {
    session: undefined,
    providers: await providers()
  }
}

export default SignIn
