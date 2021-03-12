// Nextjs
import Link from 'next/link';
// React
import { FunctionComponent } from 'react';
// Types
import { LinkProps } from '@/interfaces/index';

const LinkStyled: FunctionComponent<any> = (props: LinkProps) => {
  const { className, pathname, as, query, children, unauthorized, href="#", handleClick } = {...props};
  const NoLinked = (unauthorized || typeof(handleClick) === typeof(Function) || href !== "#");

  return (
    NoLinked ? (
      <a href={href} className={className} onClick={() => handleClick ? handleClick() : undefined}>{children}</a>
    ) : (
      <Link passHref href={{ pathname: pathname, query: query }} as={as}>
        <a className={className}>{children}</a>
      </Link>
    )
  )
}

export default LinkStyled
