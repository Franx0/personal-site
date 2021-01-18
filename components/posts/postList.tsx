// Components
import List from '@/components/shared/list';
import PostElement from '@/components/posts/postElement';

const PostList: FunctionComponent<Props> = ({ data }) => {
  const postElements = data.map((postData, i) => {
    return <PostElement key={i} postData={postData} />
  });

  return(
    <List className="with-cards">
      {postElements}
    </List>
  );
}

export default PostList
