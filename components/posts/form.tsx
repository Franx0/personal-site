// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent, useState } from 'react';
// Components
const Editor = loadable(() => import('@/components/shared/editor'));
const ButtonStyled = loadable(() => import('@/components/shared/button'));
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
    <div id={'new-post'} className="justify-center m-4">
      <form>
        <div className="mb-4">
          <input id="post-title"
                 className="rounded mx-2 px-1"
                 defaultValue={data?.title}
                 placeholder="Title"
                 onChange={(e) => handleChange('title', e.target.value)} />
          <input id="post-slug"
                 className="rounded mx-2 px-1"
                 defaultValue={data?.slug}
                 placeholder="Slug"
                 onChange={(e) => handleChange('slug', e.target.value.hyphenate())} />
          <input id="post-label"
                 className="rounded mx-2 px-1"
                 defaultValue={data?.label}
                 placeholder="Labels"
                 onChange={(e) => handleChange('label', e.target.value)} />
        </div>
      </form>

      <div>
        <div className="overflow-hidden rounded-md border-2 border-gray-300">
          <Editor
            hide={false}
            editorOpts={editorOpts}
            editorContent={data?.body}
            handleChange={(content) => handleChange('body', content)}
          />
        </div>

        <div className="flex items-center justify-between m-3">
          { typeof props.handleSubmit === 'function' &&
            <ButtonStyled buttonType="submit"
                          buttonShape="default"
                          className="bg-outstanding text-white hover:text-default rounded py-0 md:py-1 px-4"
                          disabled={props.submitting}
                          onClick={() => props.handleSubmit(data)}>
              Submit
            </ButtonStyled>
          }
          { typeof props.handleDelete === 'function' &&
            <ButtonStyled buttonType="submit"
                          buttonShape="default"
                          className="bg-red-400 text-white hover:text-default rounded py-0 md:py-1 px-4"
                          disabled={props.submitting}
                          onClick={() => props.handleDelete()}>
              Delete
            </ButtonStyled>
          }
        </div>
      </div>
    </div>
  )
}

export default Form
