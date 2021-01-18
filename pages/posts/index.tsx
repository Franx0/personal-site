// Nextjs
import { NextPage , NextPageContext} from 'next';
// Pages
import { AllPosts } from '@/pages/api/posts';
// Components
import PostList from '@/components/posts/postList';

const PostIndex: NextPage<NextPageContext> = () => {
  const { data, error } = AllPosts();

  if (error) return <div>failed to load</div>;

  if(data && data.allPosts)
    return <PostList data={data.allPosts.data} />
  else
    return <div>loading...</div>
}

export default PostIndex
