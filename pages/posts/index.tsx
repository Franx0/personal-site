// React
import { useState, useEffect } from 'react';
// Nextjs
import { NextPage , NextPageContext} from 'next';
// NextjsAuth
import { useSession } from 'next-auth/client';
// Api
import { allPosts, allPostsPublished } from '@/pages/api/posts';
// Components
import Layout from '@/components/Layout';
import PostList from '@/components/posts/postList';
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
    <Layout className="grid grid-cols-1">
      {postResponse ? (
        <>
          <PostList data={postResponse.data} />
          { postResponse.before !== null &&
            <a onClick={() => setCursor(postResponse.before)}>Prev</a>
          }
          { postResponse.after !== null &&
            <a onClick={() => setCursor(postResponse.after)}>Next</a>
          }
        </>
      ) : null }
    </Layout>
  )
};

export default PostIndex
