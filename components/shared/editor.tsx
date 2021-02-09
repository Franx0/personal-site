// React
import { FunctionComponent, useState } from 'react';
// Editor
import DOMPurify from 'dompurify';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
// Interfaces
import { EditorProps } from '@/interfaces/index';

const CONTENT_ATTS = {
  USE_PROFILES: {html: true},
};
const EDITOR_OPTS = {
  showPathLabel: true
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {
  const [cleanHTML, setCleanHTML] = useState('');
  const reset: boolean = (props.reset || false);
  const hide: boolean = (props.hide || false);
  const contentHtmlAttributes: object = {...CONTENT_ATTS, ...props.contentHtmlAtts};
  const editorOptions: object = {...EDITOR_OPTS, ...props.editorOpts};
  
  const handleChange: Function = (content) => {
    setCleanHTML(DOMPurify.sanitize(content,  contentHtmlAttributes));

    if(props.handleChange) props.handleChange(content);
  };

  return (
    <>
      <SunEditor
        name="comment-editor"
        height="auto"
        hide={hide}
        setContents={reset ? '' : props.editorContent}
        setOptions={editorOptions}
        onChange={(content) => handleChange(content)}
      />
    </>
  )
}

export default Editor
