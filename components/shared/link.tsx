// Nextjs
import Link from 'next/link';
// React
import { FunctionComponent } from 'react';
// Types
import { LinkProps } from '@/interfaces/index';

const LinkStyled: FunctionComponent<any> = (props: LinkProps) => {
  const { className, pathname, as, title="", query, children, unauthorized, href="#", handleClick } = {...props};
  const NoLinked = (unauthorized || typeof(handleClick) === typeof(Function) || href !== "#");

  return (
    NoLinked ? (
      handleClick ? (
        <a title={title} className={className} onClick={() => { handleClick() }}>{children}</a>
      ) : (
        <a title={title} href={href} className={className}>{children}</a>
      )
    ) : (
      <Link passHref href={{ pathname: pathname, query: query }} as={as}>
        <a title={title} className={className}>{children}</a>
      </Link>
    )
  )
}

export default LinkStyled
