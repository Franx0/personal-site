// React
import { FunctionComponent } from 'react';
// Components
import List from '@/components/shared/list';
import PostElement from '@/components/posts/postElement';
// Components
import LinkStyled from '@/components/shared/link';
// Interfaces
import { Post } from '@/interfaces/index';

type Props = {
  data: Array<Post>
};

const PostList: FunctionComponent<Props> = ({ data }) => {
  const postElements = data.map((postData: any, i: number) => {
    return <PostElement key={i} postData={postData} />
  });

  return(
    <>
      <LinkStyled pathname={"/posts/new"} >
        <p>New post</p>
      </LinkStyled>

      <List>
        {postElements}
      </List>
    </>
  );
}

export default PostList
