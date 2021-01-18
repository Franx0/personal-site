// Nextjs
import { NextPage } from 'next';
// Pages
import { findPostBySlug } from '@/pages/api/posts';
// Components
import PostDetail from '@/components/posts/postDetail';
// Interfaces
import { Post } from '@/interfaces/index';

const PostShow: NextPage<object> = (post) => {
  if(Object.entries(post).length)
    return <PostDetail {...post} />
  else
    return <div>loading...</div>
}

PostShow.getInitialProps = async ({ query }: any): Post => {
  let post = {};

  if(query.data) {
    post = {...Object.fromEntries(new URLSearchParams(query.data))};
  } else {
    const data: any = await findPostBySlug(query.id);
    post = data.findPostBySlug;
  }

  return {...post}
}

export default PostShow
