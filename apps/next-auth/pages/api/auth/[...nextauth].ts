import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_ID ?? '',
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET ?? '',
    }),
    FacebookProvider({
      clientId: process.env.NEXTAUTH_FACEBOOK_ID ?? '',
      clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET ?? '',
    }),
    KakaoProvider({
      clientId: process.env.NEXTAUTH_KAKAO_ID ?? '',
      clientSecret: process.env.NEXTAUTH_KAKAO_SECRET ?? '',
    }),
    NaverProvider({
      clientId: process.env.NEXTAUTH_NAVER_ID ?? '',
      clientSecret: process.env.NEXTAUTH_NAVER_SECRET ?? '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) token.access_token = account.access_token;

      return token;
    },

    async session({ session, token }) {
      if (token.access_token) {
        // @ts-ignore
        session.user.access_token = token.access_token;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
