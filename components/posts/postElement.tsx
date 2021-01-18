// React
import { FunctionComponent } from 'react';
// Nextjs
import LinkStyled from '@/components/shared/link';
// Interfaces
import { Post } from '@/interfaces/index';

const PostElement: FunctionComponent<Props> = (data: any) => {
  const { title, body, createdAt, slug }: Post = {...data.postData};
  const queryData = new URLSearchParams(data.postData).toString();

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
