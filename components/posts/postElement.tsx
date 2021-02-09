// React
import { FunctionComponent } from 'react';
// Components
import LinkStyled from '@/components/shared/link';
// Interfaces
import { Post } from '@/interfaces/index';

type Props ={
  postData: Post
};

const PostElement: FunctionComponent<Props> = (data: any) => {
  const { title, body, createdAt, slug }: Post = {...data.postData};
  const queryData = JSON.stringify(data.postData);

  return(
    <div>
      <LinkStyled pathname={"/posts/[id]"} as={`/posts/${slug}`} query={{ data: queryData }}>
        <p>{title}</p>
      </LinkStyled>
      <p>{body}</p>
      <p>{createdAt}</p>
    </div>
  )
}

export default PostElement
