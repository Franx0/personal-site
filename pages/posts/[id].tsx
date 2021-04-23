// Nextjs
import { NextPage } from 'next';
// NextjsAuth
import { getSession } from 'next-auth/client';
// Pages
import { findPostBySlug, findPostBySlugPublishedAt } from '@/pages/api/posts';
// Components
import Layout from '@/components/Layout';
import PostDetail from '@/components/posts/postDetail';
// Interfaces
import { Post } from '@/interfaces/index';
// Utils
import { redirectTo, isAdmin } from '@/utils/index';

const PostShow: NextPage<object> = (post) => {
  return (
    <Layout className="grid grid-cols-1">
      {Object.entries(post).length ? (
        <PostDetail {...post} />
      ) : null }
    </Layout>
  )
};

PostShow.getInitialProps = async (ctx: any): Promise<Post> => {
  let post: Post;
  let data: any;
  const session = getSession(ctx);

  if(ctx.query.data) {
    data = Object.fromEntries(new URLSearchParams(ctx.query.data));
    post = JSON.parse(Object.keys(data)[0]);
  } else {
    const dataPromise: any = isAdmin(session) ?
      await findPostBySlug(ctx.query.id)
    :
      await findPostBySlugPublishedAt(ctx.query.id)

    data = isAdmin(session) ?
      dataPromise.findPostBySlug
    :
      dataPromise.findPostBySlugByPublishedAt

    if(data?.errors?.length)
      redirectTo(`${process.env.NEXT_PUBLIC_SITE_URL}/404`, 302, undefined, ctx);
    else
      post = data;
  };

  return {...post}
};

export default PostShow
