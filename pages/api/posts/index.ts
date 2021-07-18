// Api
import { allPosts, allPostsPublished, findPostBySlug, findPostBySlugPublishedAt } from '@/pages/api/posts';
// Interfaces
import { Post, FetchPost } from '@/interfaces/index';
// Utils
import { isAdmin, redirectTo } from '@/utils/index';

export const fetchPosts: Function = async (language: string, session: any, cursor?: string): Promise<FetchPost> => {
  let fetchData: FetchPost;

  isAdmin(session) ?
    await allPosts(language, 8, cursor).then((res: any) => fetchData = res.allPosts)
  :
    await allPostsPublished(language, 8, cursor).then((res: any) => fetchData = res.allPostsPublished)

  return fetchData
};

export const fetchPost: Function = async (session: any, ctx: any): Promise<Post> => {
  let data: any;

  if(ctx.query?.data) {
    data = JSON.parse(ctx.query.data);
  } else {
    const dataPromise: any = isAdmin(session) ?
      await findPostBySlug(ctx.params.id)
    :
      await findPostBySlugPublishedAt(ctx.params.id)

    data = isAdmin(session) ?
      dataPromise.findPostBySlug
    :
      dataPromise.findPostBySlugByPublishedAt

    if(data === null || data?.errors?.length) {
      redirectTo(`${process.env.NEXT_PUBLIC_SITE_URL}/404`, 302, data?.errors, ctx);
    }
  };

  return data
};
