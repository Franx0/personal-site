// React
import { FunctionComponent, ReactElement } from 'react';

export type LinkProps = {
  className?: string,
  pathname: string,
  as?: string,
  query?: any,
  unauthorized?: boolean,
  children: FunctionComponent
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
