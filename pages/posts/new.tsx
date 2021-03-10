// Nextjs
import { NextPage , NextPageContext} from 'next';
// Auth
import { AuthWrapper } from '@/pages/auth/index';
// Components
import PostBox from '@/components/posts/postBox';

const PostNew: NextPage<NextPageContext> = () => {
  return <PostBox />
};

export default AuthWrapper(PostNew, true)
