import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options: any = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      return Promise.resolve(true)
    },
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl)
    },
    session: async (session, user) => {
      return Promise.resolve(session)
    }
  }
};

export default (req, res) => NextAuth(req, res, options)
