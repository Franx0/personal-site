// React
import { FunctionComponent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// NextjsAuth
import { useSession } from 'next-auth/client';
// Components
import Form from '@/components/comments/form';
// Api
import { handleComment, CREATE_COMMENT, DELETE_COMMENT } from '@/pages/api/comments';
// Utils
import { encodeAuthUri } from '@/pages/auth/index';
import { redirectTo, isOwner } from '@/utils/index';
// Interfaces
import { Comment } from '@/interfaces/index';

const CommentBox: FunctionComponent<any> = (props: {
                                                      parent: any,
                                                      comments: Array<Comment>,
                                                      buttonText: string,
                                                      updateComments: Function
                                                    }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [session] = useSession();
  const [hideEditor, setHideEditor] = useState(true);
  const parentId: string = (props?.parent?._id);
  const comments: Array<Comment> = (props.comments);

  useEffect(() => {
    if(submitting) {
      setSubmitting(false);
      setResetForm(true);
      setHideEditor(true);
    };
  }, [comments.length]);

  const newComment: Function = async() => {
    if(session) {
      setHideEditor(false);
    } else {
      const replacedAnchor = (router.asPath.includes("#") && router.asPath.substring(router.asPath.indexOf("#")));

      await redirectTo(
        encodeAuthUri(
          replacedAnchor ?
            router.asPath.replace(replacedAnchor, `#${parentId}`)
          :
            router.asPath
        )
      );
    }
  };

  const submitComment: Function = (data: Comment) => {
    const date = new Date().toISOString();
    const json = {...data,
      createdAt: date,
      post: parentId,
      user: session.user.email
    }

    setSubmitting(true);
    handleComment(CREATE_COMMENT, json).then((res: any) => {
      if(res.createComment) {
        props.updateComments(comments.concat(res.createComment));
        redirectTo(`/posts/${props.parent.slug}#${res.createComment._id}`);
      }
    });
  };

  const deleteComment: Function = (id: number) => {
    const date = new Date().toISOString();
    const json = {deletedAt: date};

    handleComment(DELETE_COMMENT, json, id).then((res: any) => {
      if(res.partialUpdateComment) {
        props.updateComments(comments.filter(comment => comment._id !== id));
        redirectTo(`/posts/${props.parent.slug}`);
      }
    });
  }

  const commentDisabled: Function = (comment: Comment) => {
    return (!isOwner(session, comment.user) || comment.deletedAt === undefined)
  };

  return(
    <div>
      <div id={parentId}>
        {
          comments.map((comment: any, i: number) => {
            return (
              <div key={i} id={comment.id}>
                <button disabled={commentDisabled(comment)} onClick={() => deleteComment(comment._id)}>Delete</button>
                <div dangerouslySetInnerHTML={{__html: comment.body}}></div>
              </div>
            )
          })
        }
        <button disabled={!hideEditor} onClick={() => newComment()}>{props.buttonText}</button>

        <Form reset={resetForm} hide={hideEditor} handleSubmit={(data: Comment) => {submitComment(data)}} />
      </div>
    </div>
  )
}

export default CommentBox
