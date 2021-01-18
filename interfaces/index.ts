// React
import { FunctionComponent } from 'react';

export type LinkProps = {
  className?: string,
  pathname: string,
  as?: string,
  query?: any,
  children: FunctionComponent
}

export type Post = {
  id?: number
  title?: string
  body?: string
  slug?: string
  label?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}
