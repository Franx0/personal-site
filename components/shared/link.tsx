// Nextjs
import Link from 'next/link';
// React
import { FunctionComponent } from 'react';
// Types
import { LinkProps } from '@/interfaces/index';

const LinkStyled: FunctionComponent<Props> = (props: LinkProps) => {
  const { className, pathname, as, query, children, unauthorized } = {...props};

  return (
    unauthorized ? (
      <p>{children}</p>
    ) : (
      <Link passHref href={{ pathname: pathname, query: query }} as={as} >
        <a>{children}</a>
      </Link>
    )
  )
}

export default LinkStyled
