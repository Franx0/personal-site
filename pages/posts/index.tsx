// Loadable
import loadable from '@loadable/component';
// React
import { useState, useEffect } from 'react';
// Nextjs
import { NextPage , GetStaticPropsResult } from 'next';
import dynamic from 'next/dynamic';
// Contexts
import { useLanguage, initialLanguage } from '@/contexts/LanguageContext';
// Frame Motion
import { motion } from 'framer-motion';
// NextjsAuth
import { useSession, getSession } from 'next-auth/client';
// Api
import { fetchPosts } from '@/pages/api/posts/index';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: true
});
const PostList = loadable(() => import('@/components/posts/postList'));
const LinkStyled = loadable(() => import('@/components/shared/link'));
import { motionProps } from '@/utils/MotionProps';
// Interfaces
import { FetchPost } from '@/interfaces/index';
// Utils
import { isAdmin } from '@/utils/index';

const PostIndex: NextPage<{ response: FetchPost }> = ({response}: {response: FetchPost}) => {
  const [postResponse, setPostResponse] = useState(response);
  const [cursor, setCursor] = useState(null);
  const [session] = useSession();
  const { dictionary, userLanguage } = useLanguage();
  const { pageVariants } = motionProps;

  useEffect(() => {
    async function setPagination(cursor: string) {
      setPostResponse(await fetchPosts(userLanguage, session, cursor));
    };

    setPagination(cursor);
  }, [userLanguage, cursor])

  return (
    <Layout layoutId="posts" className="w-full mx-6 my-6 md:mx-0">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        { isAdmin(session) === true &&
          <LinkStyled title="New Post" className="flex min-h-min w-max md:ml-4 ml-0 mt-14" pathname={"/posts/new"} >
            <motion.div
              className="flex bg-outstanding"
              style={{ width: '55px', height: '55px' }}
              initial="initial"
              animate="initial"
              exit="exit"
              variants={pageVariants.circulable}
            >
              <p className="m-auto text-selected transform hover:scale-110 rounded p-2">New</p>
            </motion.div>
          </LinkStyled>
        }

        <div className="grid grid-flow-col md:grid-cols-7 grid-cols-1 md:mt-20 mt-2">
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <PostList data={postResponse.data} />
            <div className="w-min m-auto whitespace-nowrap">
              { postResponse.before !== null &&
                <LinkStyled title="prev" handleClick={() => setCursor(postResponse.before)}><p className="cursor-pointer text-primary">{`< ${dictionary.actions.prev}`}</p></LinkStyled>
              }
              { postResponse.after !== null &&
                <LinkStyled title="next" handleClick={() => setCursor(postResponse.after)}><p className="cursor-pointer text-primary">{`${dictionary.actions.next} >`}</p></LinkStyled>
              }
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </motion.div>
    </Layout>
  )
};

export default PostIndex

export async function getStaticProps(ctx: any): Promise<GetStaticPropsResult<{ response: FetchPost }>> {
  const session = await getSession(ctx)
  const cursor = null;
  const data = await fetchPosts(initialLanguage, session, cursor)

  return {
    props: { response: data },
  }
};
