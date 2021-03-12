// React
import { FunctionComponent, ReactElement } from 'react';

export type LinkProps = {
  className?: string,
  pathname: string,
  as?: string,
  query?: any,
  unauthorized?: boolean,
  children: FunctionComponent,
  href?: string,
  handleClick?: () => void
}

export type ButtonProps = {
  className?: string,
  color?: string,
  textColor?: string,
  text?: string,
  type?: string,
  children?: FunctionComponent,
  handleClick?: () => void
}

export type Post = {
  _id?: number,
  title?: string,
  body?: string,
  slug?: string,
  label?: string,
  createdAt?: string,
  updatedAt?: string,
  publishedAt?: string,
  comments?: {data: [Comment]}
}

export type Comment = {
  _id?: number,
  body?: string,
  deletedAt?: string,
  post?: Post,
  user?: string
}

export type EditorProps = {
  hide?: boolean,
  reset?: boolean,
  editorContent?: string,
  editorOpts?: object,
  contentHtmlAtts?: object,
  handleChange?: (content: string) => void
};

export type IconProps = {
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
  width?: string,
  height?: string,
  spinnerColor?: string,
  spinnerBgColor?: string,
  className?: string
};

export type AvatarProps = {
  avatar?: string
}
