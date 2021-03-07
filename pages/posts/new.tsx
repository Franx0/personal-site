// Nextjs
import { NextPage , NextPageContext} from 'next';
// Auth
import { AuthWrapper } from '@/pages/auth/index';
// Components
import PostBox from '@/components/posts/postBox';
// Context
import { setPageTitle, setPageSearch } from '@/contexts/HeaderContext';

const PostNew: NextPage<NextPageContext> = () => {
  setPageTitle("New Post");
  setPageSearch();

  return <PostBox />
};

export default AuthWrapper(PostNew, true)
