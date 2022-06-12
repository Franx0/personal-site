// Loadable
import loadable from '@loadable/component';
// React
import { useEffect, useState, useRef } from 'react';
// Nextjs
import { NextPage, GetServerSidePropsResult } from 'next';
import dynamic from 'next/dynamic';
// NextjsAuth
import { getSession } from 'next-auth/react';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: true
});
const PostDetail = loadable(() => import('@/components/posts/postDetail'));
// Contexts
import { useLanguage } from '@/contexts/LanguageContext';
// Interfaces
import { Post } from '@/interfaces/index';
// Api
import { fetchPost } from '@/pages/api/posts/index';
// Utils
import { redirectTo } from '@/utils/index';

const PostShow: NextPage<{ response: { data: Post } }> = ({response}: {response: { data: Post }}) => {
  const { userLanguage, userLanguageChange } = useLanguage();
  const [data, setData] = useState(response.data);
  const prevPostRef = useRef(null);

  useEffect(() => {
    prevPostRef.current = {...data};
  }, [])

  useEffect(() => {
    const getPost: Function = async (slug: string) => {
      await redirectTo(`/posts/${slug}`)
    };

    if(userLanguage !== prevPostRef.current.language) getPost(response.data.translate);
  }, [userLanguage]);

  useEffect(() => {
    if(prevPostRef.current.language !== response.data.language) userLanguageChange(response.data.language);

    prevPostRef.current = response;
    setData(response.data);
  }, [response])

  return (
    <Layout className="w-full grid grid-flow-col grid-cols-1 md:grid-cols-9 mt-14">
      <div></div>
      <div className="flex flex-col col-span-7 bg-secondary text-primary mt-5">
        {Object.entries(data).length ? (
          <PostDetail post={data} className="justify-center tracking-normal p-6" />
        ) : null }
      </div>
      <div></div>
    </Layout>
  )
};

export default PostShow

export async function getServerSideProps(ctx: any): Promise<GetServerSidePropsResult<{ response: { data: Post } }>> {
  const session = await getSession(ctx)
  const data = await fetchPost(session, ctx)

  return { props: { response: { data: data } } };
};
