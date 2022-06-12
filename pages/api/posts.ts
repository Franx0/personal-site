// Graphql
import { gql } from 'graphql-request';
import { fetcher } from '@/utils/graphql-client';

export const CREATE_POST = 'createPost';
export const UPDATE_POST = 'updatePost';
export const DELETE_POST = 'deletePost';

const postDataString: String = `_id
                          title
                          body
                          slug
                          language
                          translate
                          label
                          imageUrl
                          createdAt
                          updatedAt
                          publishedAt`;

const commentDataString: String = `_id
                            body
                            user
                            createdAt`;

export const allPostsPublished = (language: string, size: number = 5, cursor?: string) => {
  return fetcher(
    gql`
      query AllPostsPublished($language: String!, $size: Int!, $cursor: String) {
        allPostsPublished(language: $language, _size: $size, _cursor: $cursor) {
          data {
            ${postDataString}
            comments {
              data {
                ${commentDataString}
              }
            }
          }
          before
          after
        }
      }
    `,
    { language: language, size: size, cursor: cursor }
  )
};

export const allPosts = (language: string, size: number = undefined, cursor?: string) => {
  return fetcher(
    gql`
      query AllPosts($language: String!, $size: Int!, $cursor: String) {
        allPosts(language: $language, _size: $size, _cursor: $cursor) {
          data {
            ${postDataString}
            comments {
              data {
                ${commentDataString}
              }
            }
          }
          before
          after
        }
      }
    `,
    { language: language, size: size, cursor: cursor }
  )
};

export const findPostBySlug = (slug: String) => {
  return fetcher(
    gql`
      query FindPostBySlug($slug: String!) {
        findPostBySlug(slug: $slug) {
          ${postDataString}
          comments {
            data {
              ${commentDataString}
            }
          }
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
          ${postDataString}
          comments {
            data {
              ${commentDataString}
            }
          }
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
    queryData = `$title: String!, $body: String!, $slug: String!, $language: String!, $translate: String, $label: String, $imageUrl: String, $createdAt: String!, $updatedAt: String!, $publishedAt: String`;
    postData = `data: {
                  title: $title
                  body: $body
                  label: $label
                  imageUrl: $imageUrl
                  slug: $slug
                  language: $language
                  translate: $translate
                  createdAt: $createdAt
                  updatedAt: $updatedAt
                  publishedAt: $publishedAt
                }`;
  };

  if(action === UPDATE_POST) {
    queryData = `$id: ID!, $title: String!, $body: String!, $slug: String!, $language: String!, $translate: String, $label: String, $imageUrl: String, $createdAt: String!, $updatedAt: String!, $publishedAt: String`;
    postData = `id: $id,
                data: {
                  title: $title
                  body: $body
                  label: $label
                  imageUrl: $imageUrl
                  slug: $slug
                  language: $language
                  translate: $translate
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
          language
          translate
          label
          imageUrl
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
//     ["size", "after", "before"],
//     Let(
//       {
//         match: Difference(
//           Reverse(Match(Index("allPosts"))),
//           Reverse(Match(Index("allPostsByPublishedAt"), "undefined"))
//         ),
//         page: If(
//           Equals(Var("before"), null),
//           If(
//             Equals(Var("after"), null),
//               Paginate(Var("match"), { size: Var("size") }),
//               Paginate(Var("match"), { size: Var("size"), after: Var("after") })
//           ),
//           Paginate(Var("match"), { size: Var("size"), before: Var("before") }),
//         )
//       },
//       Map(Var("page"), Lambda("ref", Get(Var("ref"))))
//     )
//   )
// )

// published_post
// Query(
//   Lambda("slug", Get(Match(Index("findPostBySlugByPublishedAt"), Var("slug"))))
// )
