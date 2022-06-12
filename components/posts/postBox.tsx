// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent, useState } from 'react';
// Components
const Form = loadable(() => import('@/components/posts/form'));
// Api
import { handlePost, CREATE_POST } from '@/pages/api/posts';
// Utils
import { redirectTo } from '@/utils/index';
// Interfaces
import { Post } from '@/interfaces/index';

const PostBox: FunctionComponent = () => {
  const [submitting, setSubmitting] = useState(false);

  const submitPost = (json: Post): any => {
    setSubmitting(true);
    handlePost(CREATE_POST, json).then((res: any) => {
      if(res.createPost) {
        setSubmitting(false);
        redirectTo(`/posts/${res.createPost.slug}`);
      }
    });
  };

  return(
    <div id={'new-post'}>
      <Form submitting={submitting} handleSubmit={(data: Post) => {submitPost(data)}} />
    </div>
  )
}

export default PostBox
