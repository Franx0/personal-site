// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent } from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Components
const Image = loadable(() => import('@/components/shared/image'));
const LinkStyled =  loadable(() => import('@/components/shared/link'));
// Interfaces
import { Post } from '@/interfaces/index';

type Props ={
  postData: Post
};

const PostElement: FunctionComponent<Props> = (data: any) => {
  const { title, createdAt, slug, imageUrl }: Post = {...data.postData};
  const queryData = JSON.stringify(data.postData);

  return(
    <motion.div whileHover="hover" variants={{ hover: { scale: 0.96 } }}>
      <LinkStyled className="w-full block bg-primary rounded" pathname={"/posts/[id]"} as={`/posts/${slug}`} query={{ data: queryData }}>
        <Image width="200" height="100" src={imageUrl} className="w-max rounded-t-lg object-cover content-center" alt={slug} />
        <div className="p-3">
          <p className="mt-2">{title}</p>
          <p>{createdAt}</p>
        </div>
      </LinkStyled>
    </motion.div>
  )
}

export default PostElement
