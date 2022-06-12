// Graphql
import { gql } from 'graphql-request';
import { fetcher } from '@/utils/graphql-client';

export const CREATE_POST = 'createPost';
export const UPDATE_POST = 'updatePost';
export const DELETE_POST = 'deletePost';

const commentData: String = `data {
                              _id
                              body
                              user
                              createdAt
                            }`;

export const allPostsPublished = (language: string, size: number = 5, cursor?: string) => {
  return fetcher(
    gql`
      query AllPostsPublished($language: String!, $size: Int!, $cursor: String) {
        allPostsPublished(language: $language, _size: $size, _cursor: $cursor) {
          data {
            _id
            title
            body
            slug
            label
            createdAt
            updatedAt
            publishedAt
            comments {${commentData}}
          }
          before
          after
        }
      }
    `,
    { language: language, size: size, cursor: cursor }
  )
};

export const allPosts = (size: number = 5, cursor?: string) => {
  return fetcher(
    gql`
      query AllPosts($size: Int!, $cursor: String) {
        allPosts(_size: $size, _cursor: $cursor) {
          data {
            _id
            title
            body
            slug
            label
            createdAt
            updatedAt
            publishedAt
            comments {${commentData}}
          }
          before
          after
        }
      }
    `,
    { size: size, cursor: cursor }
  )
};

export const findPostBySlug = (slug: String) => {
  return fetcher(
    gql`
      query FindPostBySlug($slug: String!) {
        findPostBySlug(slug: $slug) {
          _id
          title
          body
          slug
          label
          createdAt
          updatedAt
          publishedAt
          comments {${commentData}}
        }
      }
    `,
    { slug: slug }
  );
};

export const findPostBySlugPublishedAt = (slug: String) => {
  return fetcher(
    gql`
      query FindPostBySlugByPublishedAt($slug: String!) {
        findPostBySlugByPublishedAt(slug: $slug) {
          _id
          title
          body
          slug
          label
          createdAt
          updatedAt
          publishedAt
          comments {${commentData}}
        }
      }
    `,
    { slug: slug }
  );
};

export const handlePost = (action: string, data: any = {}, id?: number) => {
  let postData: string = '';
  let queryData: string = '';

  if(action === CREATE_POST) {
    queryData = `$title: String!, $body: String!, $slug: String!, $label: String,
                 $createdAt: String!, $updatedAt: String!, $publishedAt: String`;
    postData = `data: {
                  title: $title
                  body: $body
                  label: $label
                  slug: $slug
                  createdAt: $createdAt
                  updatedAt: $updatedAt
                  publishedAt: $publishedAt
                }`;
  };

  if(action === UPDATE_POST) {
    queryData = `$id: ID!, $title: String!, $body: String!, $slug: String!, $label: String,
                 $createdAt: String!, $updatedAt: String!, $publishedAt: String`;
    postData = `id: $id,
                data: {
                  title: $title
                  body: $body
                  label: $label
                  slug: $slug
                  createdAt: $createdAt
                  updatedAt: $updatedAt
                  publishedAt: $publishedAt
                }`;
  };

  if(action === DELETE_POST) {
    queryData = `$id: ID!`;
    postData = `id: $id`;
  };


  const response = fetcher(
    gql`
      mutation ${action.capitalize()}(${queryData}) {
        ${action}(${postData}) {
          _id
          title
          body
          slug
          label
          createdAt
          updatedAt
          publishedAt
        }
      }
    `,
    { ...data, id: id }
  );

  return response
};

// published_posts
// Query(
//   Lambda(
//     "data",
//     Map(
//       Paginate(
//         Difference(
//           Match(Index("allPosts")),
//           Match(Index("allPostsByPublishedAt"), "undefined")
//         )
//       ),
//       Lambda("post", Get(Var("post")))
//     )
//   )
// )

// published_post
// Query(
//   Lambda("slug", Get(Match(Index("findPostBySlugByPublishedAt"), Var("slug"))))
// )
