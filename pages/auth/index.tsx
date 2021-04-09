// Nextjs
import { NextPage } from 'next';
import Router from 'next/router';
// NextjsAuth
import { getSession } from 'next-auth/client';
// React
import React, { Component } from 'react'
import { redirectTo, isAdmin } from '@/utils/index';

export const AuthWrapper = (Child, adminCheck): (NextPage | Component) => {
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      const session = await getSession(ctx);
      const notAdmin = !isAdmin(session);

      if(session && adminCheck && notAdmin) redirectUnauthorized(ctx);

      if(session && ctx) {
        if(Child.getInitialProps) return Child.getInitialProps(ctx)
      } else {
        const encodedURI = encodeAuthUri(ctx?.pathname);

        try {
          if(encodedURI) {
            await redirectTo(encodedURI, 302, undefined, ctx);
          } else {
            redirectUnauthorized();
          }
        } catch(err) {
          console.log('REDIRECTION ERROR: ', err)
        };
      };

      return {}
		}

    render = () => {
      return <Child {...this.props} />
    }
	}
};

export const encodeAuthUri: Function = (url?: string): (string | null) => {
  // Auth URI encode
  const currentUrl = url || Router.asPath;
  const authUrl = '/auth/signin';
  const callbackUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}${currentUrl}`;
  const URI = `${process.env.NEXT_PUBLIC_AUTH_URL}${authUrl}?callbackUrl=${encodeURIComponent(callbackUrl)}`

  return URI;
};

export const redirectAuthPath: Function = (URI: string, ctx?: any) => {
  try {
    if(URI) {
      redirectTo(URI, 302)
    } else {
      redirectUnauthorized();
    }
  } catch(err) {
    console.log('REDIRECTION ERROR: ', err)
  };
};

const redirectUnauthorized: Function = () => {
  redirectTo('/', 401, { msg: 'Unauthorized' });
}

export default AuthWrapper
