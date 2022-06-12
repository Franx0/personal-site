import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import GitLabProvider from "next-auth/providers/gitlab"
import TwitterProvider from "next-auth/providers/twitter"

const options: any = {
  site: process.env.NEXTAUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/authentication'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    GitLabProvider({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    })
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (profile.verified_email === true) return Promise.resolve(true);
      return Promise.resolve(false)
    },
    redirect: async ({ url, baseUrl }) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl)
    },
    session: async ({ session, token, user }) => {
      return Promise.resolve(session)
    }
  }
};

export default (req, res) => NextAuth(req, res, options)
