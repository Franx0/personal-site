// Graphql
import { gql } from 'graphql-request';
import { fetcher } from '@/utils/graphql-client';

export const CREATE_COMMENT = 'createComment';
export const DELETE_COMMENT = 'partialUpdateComment';

export const deleteComments = (ids: Array<number>) => {
  return fetcher(
    gql`
      mutation DeleteComments($ids: [ID!]!) {
        deleteComments(commentIds: $ids) {
          _id
        }
      }
    `,
    { ids: ids }
  );
};

export const handleComment = (action: string, data: any = {}, id?: number) => {
  let commentData: string = '';
  let queryData: string = '';
  
  if(action === CREATE_COMMENT) {
    queryData = `$body: String!, $user: String!, $post: ID!,
                 $createdAt: String!`;
    commentData = `data: {
                  body: $body
                  createdAt: $createdAt
                  user: $user
                  post: { connect: $post }
                }`;
  };

  if(action === DELETE_COMMENT) {
    queryData = `$id: ID!, $deletedAt: String!`;
    commentData = `id: $id
                   data: {
                    deletedAt: $deletedAt
                  }`;
  };


  const response = fetcher(
    gql`
      mutation ${action.capitalize()}(${queryData}) {
        ${action}(${commentData}) {
          _id
          body
          createdAt
          deletedAt
          user
          post {
            slug
          }
        }
      }
    `,
    { ...data, id: id }
  );

  return response
};

// delete_comments
// Query(
//   Lambda(
//     ["commentIds"],
//     Map(
//       Var("commentIds"),
//       Lambda("id", Do(Delete(Ref(Collection("Comment"), Var("id"))), Var("id")))
//     )
//   )
// )
