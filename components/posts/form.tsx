// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent, useEffect, useState } from 'react';
// SunEditor
import image from 'suneditor/src/plugins/dialog/link';
import {font, fontSize, fontColor, formatBlock, link, video} from 'suneditor/src/plugins';
// Components
const Editor = loadable(() => import('@/components/shared/editor'));
const ButtonStyled = loadable(() => import('@/components/shared/button'));
const PostDetail = loadable(() => import('@/components/posts/postDetail'));
// Interfaces
import { Post } from '@/interfaces/index';

const editorOpts = {
  showPathLabel: false,
  buttonList: [
    ['undo', 'redo', 'fullScreen'],
    ['font', 'fontSize', 'fontColor', 'paragraphStyle', 'bold', 'underline', 'italic', 'strike'],
    ['subscript', 'superscript', 'removeFormat'],
    ['formatBlock'],
    ['outdent', 'indent', 'showBlocks'],
    ['codeView', 'link', 'image', 'video']
  ],
  plugins: [font, fontSize, fontColor, formatBlock, link, video, image],
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
      <div className="grid grid-flow-col md:grid-cols-2 grid-cols-1 text-black">
        <form className="m-1">
          <div className="flex md:flex-row flex-col mb-0 px-2 md:space-x-2">
            <input id="post-title"
                   className="w-full px-2 rounded my-2 md:my-0"
                   defaultValue={data?.title}
                   placeholder="Title"
                   onChange={(e) => handleChange('title', e.target.value)} />
            <input id="post-slug"
                   className="w-full px-2 rounded my-2 md:my-0"
                   defaultValue={data?.slug}
                   placeholder="Slug"
                   onChange={(e) => handleChange('slug', e.target.value.hyphenate())} />
            <input id="post-label"
                   className="w-full px-2 rounded my-2 md:my-0"
                   defaultValue={data?.label}
                   placeholder="Labels"
                   onChange={(e) => handleChange('label', e.target.value)} />
          </div>
          <div className="flex flex-col flex-wrap md:my-4 mb-2 px-2">
            <input id="post-image"
                  className="w-full px-2 rounded my-2 md:my-0"
                  defaultValue={data?.imageUrl}
                  placeholder="Image URL"
                  onChange={(e) => handleChange('imageUrl', e.target.value)} />
          </div>
          <div className="px-2">
            <div className="overflow-hidden rounded-md border-2 border-gray-300">
              <Editor
                name="post-editor"
                hide={false}
                editorOpts={editorOpts}
                editorContent={data?.body}
                handleChange={(content) => handleChange('body', content)}
              />
            </div>

            <div className="flex items-center justify-between m-3">
              { typeof props.handleSubmit === 'function' &&
                <ButtonStyled buttonType="button"
                              buttonShape="default"
                              className="bg-outstanding text-white hover:text-default rounded py-0 md:py-1 px-4"
                              disabled={props.submitting}
                              handleClick={() => props.handleSubmit(data)}>
                  Submit
                </ButtonStyled>
              }
              { typeof props.handleDelete === 'function' &&
                <ButtonStyled buttonType="submit"
                              buttonShape="default"
                              className="bg-red-400 text-white hover:text-default rounded py-0 md:py-1 px-4"
                              disabled={props.submitting}
                              handleClick={() => props.handleDelete()}>
                  Delete
                </ButtonStyled>
              }
            </div>
          </div>
        </form>
        <div className="md:flex hidden bg-white text-black m-1"><PostDetail post={data} className="p-3 text-xs" forcePreview={true} /></div>
      </div>
    </div>
  )
}

export default Form
