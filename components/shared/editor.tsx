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
  showPathLabel: true,
};

const Editor: FunctionComponent<EditorProps> = (props: EditorProps) => {
  const {defaultStyle, editorContent, contentHtmlAtts, editorOpts, reset=false, hide=false, name="editor", handleChange} = props;
  const [cleanHTML, setCleanHTML] = useState('');
  const contentHtmlAttributes: object = {...CONTENT_ATTS, ...contentHtmlAtts};
  const editorOptions: object = {...EDITOR_OPTS, ...editorOpts};

  const onChange: Function = (content) => {
    setCleanHTML(DOMPurify.sanitize(content,  contentHtmlAttributes));

    if(handleChange) handleChange(content);
  };

  return (
    <>
      <SunEditor
        setDefaultStyle={defaultStyle}
        name={name}
        height="auto"
        hide={hide}
        setContents={reset ? '' : editorContent}
        setOptions={editorOptions}
        onChange={(content) => onChange(content)}
      />
    </>
  )
}

export default Editor
