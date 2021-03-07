// React
import { useState, useEffect } from 'react';
// Nextjs
import { NextPage , NextPageContext} from 'next';
// NextjsAuth
import { useSession } from 'next-auth/client';
// Api
import { allPosts, allPostsPublished } from '@/pages/api/posts';
// Components
import PostList from '@/components/posts/postList';
// Utils
import { isAdmin } from '@/utils/index';
// Context
import { setPageTitle, setPageSearch } from '@/contexts/HeaderContext';

const PostIndex: NextPage<NextPageContext> = () => {
  const [postResponse, setPostResponse] = useState(null);
  const [cursor, setCursor] = useState(null);
  const [session] = useSession();
  setPageTitle("Blog");

  useEffect(() => {
    isAdmin(session) ?
      allPosts(undefined, cursor).then((res: any) => setPostResponse(res.allPosts))
    :
      allPostsPublished(undefined, cursor).then((res: any) => setPostResponse(res.allPostsPublished))
  }, [cursor])

  setPageSearch(postResponse?.data);

  if(postResponse)
    return (
      <>
        <PostList data={postResponse.data} />
        {
          postResponse.before !== null &&
          <a onClick={() => setCursor(postResponse.before)}>Prev</a>
        }
        {
          postResponse.after !== null &&
          <a onClick={() => setCursor(postResponse.after)}>Next</a>
        }
      </>
    )
  else
    return <div>loading...</div>
};

export default PostIndex
