// Graphql
import { GraphQLClient } from 'graphql-request';
// Toast
import { toast } from 'react-nextjs-toast';

const endpoint = 'https://graphql.fauna.com/graphql';

const graphQLClient = new GraphQLClient(endpoint);

graphQLClient.setHeaders({
  authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET}`,
  'X-Schema-Preview': 'partial-update-mutation'
})

export const fetcher = async (query: string, variables: any): Promise<void> => {
  try {
    const response = await graphQLClient.request(query, variables);
    console.log('RESPONSE: ', response)
    return response
  } catch (error) {
    console.error('ERROR: ', error);
    toast.notify(error.message, { type: 'error' });
  }
}
