import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options: any = {
  site: process.env.NEXTAUTH_URL,
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Providers.GitLab({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    })
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      if (profile.verified_email === true) return Promise.resolve(true);
      return Promise.resolve(false)
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
