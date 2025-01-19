import { IUser } from '@/shared/interfaces/interfaces';
import { login } from '@/shared/services/login/login.service';

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'test@test.com' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        return {
          id: 1,
          email: 1,
          roles: [],
        } as any;
        if (!credentials) throw new Error('Missing credentials');
        if (!credentials.email || !credentials.password)
          throw new Error('Missing credentials');
        const { email } = credentials;
        const response = await login(email, credentials.password);

        const { status, result, message } = response;

        if (!status) {
          throw new Error(message);
        }

        const { userId, roles } = result.data;

        const user: IUser = {
          id: userId,
          email,
          roles,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === 'update' && session) {
        return { ...token, ...session?.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  pages: {
    signIn: '/',
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler };
