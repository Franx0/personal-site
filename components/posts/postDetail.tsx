// React
import { FunctionComponent } from 'react';
// Interfaces
import { Post } from '@/interfaces/index';

const PostDetail: FunctionComponent<Props> = (post: Post) => {
  const { title, body, createdAt }: Post = {...post};

  return(
    <div>
      <p>{title}</p>
      <p>{body}</p>
      <p>{createdAt}</p>
    </div>
  )
}

export default PostDetail
