// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent, useEffect, useState } from 'react';
// NextjsAuth
import { useSession } from 'next-auth/client'
// Components
const CommentBox = loadable(() => import('@/components/comments/commentBox'));
const Form = loadable(() => import('@/components/posts/form'));
const Image = loadable(() => import('@/components/shared/image'));
// Api
import { handlePost, UPDATE_POST, DELETE_POST } from '@/pages/api/posts';
import { deleteComments } from '@/pages/api/comments';
// Utils
import { redirectTo, isAdmin } from '@/utils/index';
// Interfaces
import { Post, Comment } from '@/interfaces/index';
// Contexts
import { useMetadata } from '@/contexts/MetadataContext';

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

const PostDetail = function({post, className = "", forcePreview = false}: {post: Post, className: string, forcePreview: boolean}) {
  const [session] = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState(post?.comments?.data)
  const { updateMetadata } = useMetadata();
  const { _id, title, body, slug, imageUrl, label, createdAt }: Post = {...post};

  useEffect(() => {
    updateMetadata({
      title: title,
      description: createdAt,
      imageUrl: imageUrl,
      keywords: label
    })
  }, []);

  const submitPost: Function = (data: Post) => {
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
      {(isAdmin(session) && !forcePreview) ? (
        <div>
          <Form data={post} handleSubmit={(data: any) => submitPost(data)} handleDelete={() => deletePost(_id)}/>
        </div>
      ) : (
        <div className={`post detail ${className}`}>
          <Image width="200" height="100" src={imageUrl} className="w-1/2 m-auto object-cover content-center md:mb-10 mb-4" alt={slug} />
          <h1>{title}</h1>
          <h5 className="text-default">{createdAt.toDate() || 'dd/mm/YYYY'}</h5>
          <div dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      )}

      {/* <CommentBox parent={post} comments={comments} buttonText={'Add comment'} updateComments={(newComments) => setComments(newComments)}/> */}
    </>
  )
}

export default PostDetail
