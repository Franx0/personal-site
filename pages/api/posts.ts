// Graphql
import { gql } from 'graphql-request';
import { fetcher } from '@/utils/graphql-client';
// Hooks
import useSWR from 'swr';

export const AllPosts = () => {
  return useSWR<any>(
    gql`
      {
        allPosts {
          data {
            id
            title
            body
            slug
            label
            createdAt
            updatedAt
            publishedAt
          }
        }
      }
    `,
    fetcher
  );
};

export const findPostBySlug = (slug: String) => {
  return fetcher(
    gql`
      query FindPostBySlug($slug: String!) {
        findPostBySlug(slug: $slug) {
          id
          title
          body
          label
          createdAt
          updatedAt
          publishedAt
        }
      }
    `,
    { slug: slug }
  );
};

// mutation CreatePost  {
//   createPost(
//     data: {
//       title: 'Post title'
//       body: 'Post body'
//       label: 'ruby'
//       slug: 'post-title'
//       createdAt: '2021-01-15T12:05:28.700Z'
//       updatedAt: '2021-01-15T12:05:28.700Z'
//       publishedAt: '2021-01-15T12:05:28.700Z'
//     }
//   )
// }
