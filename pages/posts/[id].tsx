// Nextjs
import { NextPage } from 'next';
// Pages
import { findPostBySlugPublishedAt } from '@/pages/api/posts';
// Components
import PostDetail from '@/components/posts/postDetail';
// Interfaces
import { Post } from '@/interfaces/index';
// Utils
import { redirectTo } from '@/utils/index';

const PostShow: NextPage<object> = (post) => {
  if(Object.entries(post).length)
    return <PostDetail {...post} />
  else
    return <div>loading...</div>
};

PostShow.getInitialProps = async (ctx: any): Promise<Post> => {
  let post: Post;
  let data: any;

  if(ctx.query.data) {
    const data: any = Object.fromEntries(new URLSearchParams(ctx.query.data));
    post = JSON.parse(Object.keys(data)[0]);
  } else {
    const data: any = await findPostBySlugPublishedAt(ctx.query.id);
    if(data?.errors?.length)
      redirectTo(`${process.env.NEXT_PUBLIC_AUTH_URL}/404`, 302, undefined, ctx);
    else
      post = data.findPostBySlugByPublishedAt;
  };

  return {...post}
};

export default PostShow
