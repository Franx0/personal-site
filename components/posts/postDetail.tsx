// React
import { FunctionComponent, useState } from 'react';
// NextjsAuth
import { useSession } from 'next-auth/react'
// Components
import CommentBox from '@/components/comments/commentBox';
import Form from '@/components/posts/form';
// Api
import { handlePost, UPDATE_POST, DELETE_POST } from '@/pages/api/posts';
import { deleteComments } from '@/pages/api/comments';
// Utils
import { redirectTo, isAdmin } from '@/utils/index';
// Interfaces
import { Post, Comment } from '@/interfaces/index';

const editorOpts = {
  showPathLabel: false,
  buttonList: [
    ['undo', 'redo'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['removeFormat'],
    ['outdent', 'indent'],
    ['fullScreen', 'showBlocks', 'codeView']
  ]
};

const PostDetail: FunctionComponent<Post> = (post: Post) => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState(post?.comments?.data)
  const { _id, title, body, createdAt }: Post = {...post};

  const submitPost: Function = (data) => {
    const date = new Date().toISOString();
    const json = {...data,
      updatedAt: date
    }

    setSubmitting(true);
    handlePost(UPDATE_POST, json, _id).then(res => {
      setSubmitting(false);
      redirectTo('/posts');
    });
  };

  const deletePost: Function = (id) => {
    setSubmitting(true);
    handlePost(DELETE_POST, null, id).then(res => {
      deleteComments(comments.map((comment: Comment) => comment._id));
      setSubmitting(false);
      redirectTo('/posts');
    });
  };

  return(
    <>
      {isAdmin(session) ? (
        <div>
          <Form data={post} handleSubmit={(data) => submitPost(data)} handleDelete={() => deletePost(_id)}/>
        </div>
      ) : (
        <div>
          <p>{title}</p>
          <p>{body}</p>
          <p>{createdAt}</p>
        </div>
      )}

      <CommentBox parent={post} comments={comments} buttonText={'Add comment'} updateComments={(newComments) => setComments(newComments)}/>
    </>
  )
}

export default PostDetail
