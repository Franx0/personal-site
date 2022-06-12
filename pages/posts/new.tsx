// Loadable
import loadable from '@loadable/component';
// Nextjs
import { NextPage , NextPageContext} from 'next';
import dynamic from 'next/dynamic';
// Auth
import AuthWrapper from '@/pages/auth/index';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false
});
const PostBox = loadable(() => import('@/components/posts/postBox'));

const PostNew: NextPage<NextPageContext> = () => {
  return (
    <Layout className="w-full mt-20">
      <PostBox />
    </Layout>
  )
};

export default AuthWrapper(PostNew, true)
