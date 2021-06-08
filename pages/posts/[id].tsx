// Loadable
import loadable from '@loadable/component';
// Nextjs
import { NextPage } from 'next';
// NextjsAuth
import { getSession } from 'next-auth/client';
// Pages
import { findPostBySlug, findPostBySlugPublishedAt } from '@/pages/api/posts';
// Components
import Layout from '@/components/Layout';
const PostDetail = loadable(() => import('@/components/posts/postDetail'));
// Interfaces
import { Post } from '@/interfaces/index';
// Utils
import { redirectTo, isAdmin } from '@/utils/index';

const PostShow: NextPage<object> = ({data}: {data: Post}) => {
  return (
    <Layout className="w-full grid grid-flow-col grid-cols-1 md:grid-cols-9">
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

PostShow.getInitialProps = async (ctx: any): Promise<{data: Post}> => {
  let post: Post;
  let data: any;
  const session = getSession(ctx);

  if(ctx.query.data) {
    data = JSON.parse(ctx.query.data);
    post = data;
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

  return { data: {...post } }
};

export default PostShow
