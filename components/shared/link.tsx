// Nextjs
import Link from 'next/link';
// React
import { FunctionComponent } from 'react';
// Types
import { LinkProps } from '@/interfaces/index';

const LinkStyled: FunctionComponent<any> = (props: LinkProps) => {
  const { className, pathname, as, query, children, unauthorized, handleClick } = {...props};
  const NoLinked = (unauthorized || typeof(handleClick) === typeof(Function));

  return (
    NoLinked ? (
      <div className={className} onClick={() => handleClick()}>{children}</div>
    ) : (
      <Link passHref href={{ pathname: pathname, query: query }} as={as}>
        <a className={className}>{children}</a>
      </Link>
    )
  )
}

export default LinkStyled
