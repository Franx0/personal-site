// Loadable
import loadable from '@loadable/component';
// Nextjs
import { NextPage , NextPageContext} from 'next';
// Auth
import AuthWrapper from '@/pages/auth/index';
// Components
const PostBox = loadable(() => import('@/components/posts/postBox'));

const PostNew: NextPage<NextPageContext> = () => {
  return <PostBox />
};

export default AuthWrapper(PostNew, true)
