// Nextjs
import { NextPage } from 'next';
// NextjsAuth
import { getSession } from 'next-auth/client';
// Pages
import { findPostBySlug, findPostBySlugPublishedAt } from '@/pages/api/posts';
// Components
import PostDetail from '@/components/posts/postDetail';
// Interfaces
import { Post } from '@/interfaces/index';
// Utils
import { redirectTo, isAdmin } from '@/utils/index';

const PostShow: NextPage<object> = (post) => {
  if(Object.entries(post).length)
    return <PostDetail {...post} />
  else
    return <div>loading...</div>
};

PostShow.getInitialProps = async (ctx: any): Promise<Post> => {
  let post: Post;
  let data: any;
  const session = getSession(ctx);

  if(ctx.query.data) {
    const data: any = Object.fromEntries(new URLSearchParams(ctx.query.data));
    post = JSON.parse(Object.keys(data)[0]);
  } else {
    const dataPromise: any = isAdmin(session) ?
      await findPostBySlug(ctx.query.id)
    :
      await findPostBySlugPublishedAt(ctx.query.id)

    const data = isAdmin(session) ?
      dataPromise.findPostBySlug
    :
      dataPromise.findPostBySlugPublishedAt

    if(data?.errors?.length)
      redirectTo(`${process.env.NEXT_PUBLIC_AUTH_URL}/404`, 302, undefined, ctx);
    else
      post = data;
  };

  return {...post}
};

export default PostShow
