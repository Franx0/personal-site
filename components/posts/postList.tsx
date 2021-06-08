// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent } from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Components
const PostElement = loadable(() => import('@/components/posts/postElement'));
// Components
import { motionProps } from '@/utils/MotionProps';
// Interfaces
import { Post } from '@/interfaces/index';

type Props = {
  data: Array<Post>
};

const PostList: FunctionComponent<Props> = ({ data }) => {
  const postElements = data.map((postData: any, i: number) => {
    return (
      <motion.div key={`motion-${i}`} className="md:m-4" variants={motionProps.postVariants}>
        <div key={postData._id} className="w-min p-3 m-2">
          <PostElement key={i} postData={postData} />
        </div>
      </motion.div>
    )
  });

  return(
    <div className="flex flex-wrap flex-column m-auto md:justify-start justify-center">
      {postElements}
    </div>
  );
}

export default PostList
