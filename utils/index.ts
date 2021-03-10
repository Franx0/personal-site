// Nextjs
import { NextPageContext} from 'next';
import Router from 'next/router';

export const isOwner = (session: any, owner: string): boolean => {
  return session && session.user && ((process.env.NEXT_PUBLIC_ADMINS
          .split(",")
          .includes(session.user.email)) || (session.user.email === owner))
};

export const isAdmin = (session: any): boolean => {
  return session && session.user && process.env.NEXT_PUBLIC_ADMINS
          .split(",")
          .includes(session.user.email)
};

export const redirectTo = async ( path: string = '/',
                                  code: number = 302,
                                  query: any = {},
                                  ctx: NextPageContext = null): Promise<any> => {
  // Server side checks
  try {
    if(typeof window === 'undefined') {
      console.log('server redirect')
      ctx.res.writeHead(code, { Location: path });
      ctx.res.end();
    } else {
      console.log('client redirect')
      Router.push(path, path);
      return
    }
    return {}
  } catch(err) {
    console.log('REDIRECTION ERROR: ', err)
  };
};
