// React
import { FunctionComponent, useState, useEffect } from 'react';
// Components
import Editor from '@/components/shared/editor';
// Interfaces
import { Comment } from '@/interfaces/index';

const editorOpts = {
  showPathLabel: false,
  buttonList: [
    ['undo', 'redo'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['removeFormat'],
    ['outdent', 'indent']
  ]
};

const contentHtmlAtts: object = {
  ALLOWED_TAGS: ['p', 'strong', 'br', 'u', 'em', 'del', 'sub', 'sup'],
  ALLOWED_ATTR: ['style']
};

type Props = {
  reset?: boolean,
  hide?: boolean,
  data?: Comment,
  handleChange?: Function,
  handleSubmit?: Function,
  submitting?: boolean
};

const Form: FunctionComponent<Props> = (props: Props) => {
  const [data, setData] = useState<Comment>(undefined);

  useEffect(() => {
    setData(undefined);
  }, [props.reset]);

  const handleChange: Function = (type: string, value: string) => {
    setData(prevState => {
      return({
        ...prevState,
        [type]: value
      })
    });

    if(props.handleChange) props.handleChange(data);
  };

  const editorEmpty: Function = (content: string) => {
    return [undefined, "<p><br></p>"].includes(content);
  }

  return(
    <div>
      <div id={'new-comment'}>
        <Editor
          reset={props.reset}
          hide={props.hide}
          editorOpts={editorOpts}
          editorContent={data?.body}
          contentHtmlAtts={contentHtmlAtts}
          handleChange={(content) => handleChange('body', content)}
        />
        <button disabled={(editorEmpty(data?.body) || props.submitting)} onClick={() => props.handleSubmit(data)}>Submit</button>
      </div>
    </div>
  )
}

export default Form
