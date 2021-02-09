// React
import { FunctionComponent, useState } from 'react';
// Components
import Editor from '@/components/shared/editor';
// Interfaces
import { Post } from '@/interfaces/index';

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

type Props = {
  data?: Post,
  handleChange?: Function,
  handleSubmit?: Function,
  handleDelete?: Function,
  submitting?: boolean
};

const Form: FunctionComponent<Props> = (props: Props) => {
  const [data, setData] = useState(props.data || {});

  const handleChange: Function = (type: string, value: string) => {
    setData(prevState => {
      return({
        ...prevState,
        [type]: value
      })
    });

    if(props.handleChange) props.handleChange(data);
  };

  return(
    <div>
      <div id={'new-post'}>
        <input defaultValue={data?.title} onChange={(e) => handleChange('title', e.target.value)}></input>
        <input defaultValue={data?.slug} onChange={(e) => handleChange('slug', e.target.value.hyphenate())}></input>
        <input defaultValue={data?.label} onChange={(e) => handleChange('label', e.target.value)}></input>
        <Editor
          hide={false}
          editorOpts={editorOpts}
          editorContent={data?.body}
          handleChange={(content) => handleChange('body', content)}
        />
        { typeof props.handleSubmit === 'function' &&
          <button disabled={props.submitting} onClick={() => props.handleSubmit(data)}>Submit</button>
        }
        { typeof props.handleDelete === 'function' &&
          <button disabled={props.submitting} onClick={() => props.handleDelete()}>Delete</button>
        }
      </div>
    </div>
  )
}

export default Form
