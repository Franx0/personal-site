// React
import { FunctionComponent, ReactElement } from 'react';

export type LinkProps = {
  className?: string,
  pathname: string,
  as?: string,
  title?: string,
  query?: any,
  unauthorized?: boolean,
  children: FunctionComponent,
  href?: string,
  handleClick?: () => void
}

export interface ButtonProps {
  disabled?: boolean,
  className?: string,
  color?: string,
  textColor?: string,
  text?: string,
  buttonType?: 'submit' | 'reset' | 'button' | undefined,
  buttonShape?: string,
  children?: FunctionComponent,
  handleClick?: () => void
}

export type CardProps = {
  forwardedRef?: any,
  cardOpened: boolean,
  handleCardOpened: (value?: string) => void,
  className?: string,
  style?: any,
  expandedStyle?: any,
  title?: string,
  subtitle?: string,
  content: string,
  image?: any
  expandedImage?: any,
}

export const PostObject = (data) => {
  return {
    title: data?.title || '',
    body: data?.body || '',
    slug: data?.slug || '',
    language: data?.language || '',
    translate: data?.translate || '',
    label: data?.label || '',
    createdAt: data?.createdAt || '',
    updatedAt: data?.updatedAt || '',
    publishedAt: data?.publishedAt || '',
    imageUrl: data?.imageUrl || ''
  }
}

export type Post = {
  _id?: number,
  title?: string,
  body?: string,
  slug?: string,
  language: string,
  translate?: string,
  label?: string,
  createdAt?: string,
  updatedAt?: string,
  publishedAt?: string,
  comments?: {data: [Comment]},
  imageUrl?: string
}

export type FetchPost = {
  data: Array<Post>,
  before?: string,
  after?: string
}

export type Comment = {
  _id?: number,
  body?: string,
  deletedAt?: string,
  post?: Post,
  user?: string
}

export type EditorProps = {
  name?: string,
  defaultStyle?: string,
  hide?: boolean,
  reset?: boolean,
  editorContent?: string,
  editorOpts?: object,
  contentHtmlAtts?: object,
  handleChange?: (content: string) => void
};

export type IconProps = {
  title?: string,
  color?: string,
  width?: string,
  height?: string,
  className?: string
};

export type ToogleProps = {
  active: boolean,
  width?: string | number,
  height?: string | number,
  easeRange?: string | number,
  className?: string,
  icon?: FunctionComponent,
  iconClassName?: string,
  handleClick?: () => void
};

export type LoaderProps = {
  title: string,
  text: string,
  width?: string,
  height?: string,
  spinnerColor?: string,
  spinnerBgColor?: string,
  className?: string,
  delay?: number
};

export type ImageProps = {
  src: string,
  defaultSrc?: string,
  alt: string,
  width?: string,
  height?: string,
  className?: string,
  style?: any,
};

export type AvatarProps = {
  avatar?: string
};

export type HeaderProps = {
  history: Array<string>,
  pageVariants: any,
  textVariants: any
}
