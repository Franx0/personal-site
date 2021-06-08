// Loadable
import loadable from '@loadable/component';
// React
import { useState, useEffect } from 'react';
// Nextjs
import { NextPage , NextPageContext} from 'next';
import dynamic from 'next/dynamic';
// Frame Motion
import { motion } from 'framer-motion';
// NextjsAuth
import { useSession } from 'next-auth/client';
// Api
import { allPosts, allPostsPublished } from '@/pages/api/posts';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false
});
const PostList = loadable(() => import('@/components/posts/postList'));
const LinkStyled = loadable(() => import('@/components/shared/link'));
// Utils
import { isAdmin } from '@/utils/index';

const PostIndex: NextPage<NextPageContext> = (props: any) => {
  const [postResponse, setPostResponse] = useState(null);
  const [cursor, setCursor] = useState(null);
  const [session] = useSession();

  useEffect(() => {
    isAdmin(session) ?
      allPosts(undefined, cursor).then((res: any) => setPostResponse(res.allPosts))
    :
      allPostsPublished(undefined, cursor).then((res: any) => setPostResponse(res.allPostsPublished))
  }, [cursor])

  return (
    <Layout layoutId="posts" className="w-full mx-6 my-6 md:mx-0">
      {postResponse ? (
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          { isAdmin(session) === true &&
            <LinkStyled className="min-h-min w-auto" pathname={"/posts/new"} >
              <p className="max-w-min bg-outstanding text-selected transform hover:scale-110 rounded p-2 ml-4">New</p>
            </LinkStyled>
          }

          <div className="grid grid-flow-col md:grid-cols-7 grid-cols-1 md:mt-24 mt-2">
            <div className="col-span-1"></div>
            <div className="col-span-5">
              <PostList data={postResponse.data} />
              <div className="w-min m-auto whitespace-nowrap">
                { postResponse.before !== null &&
                  <LinkStyled title="prev" handleClick={() => setCursor(postResponse.before)}><p className="cursor-pointer text-primary">{`< ${props.dictionary.actions.prev}`}</p></LinkStyled>
                }
                { postResponse.after !== null &&
                  <LinkStyled title="next" handleClick={() => setCursor(postResponse.after)}><p className="cursor-pointer text-primary">{`${props.dictionary.actions.next} >`}</p></LinkStyled>
                }
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </motion.div>
      ) : null }
    </Layout>
  )
};

export default PostIndex
