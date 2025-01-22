import { IUser } from '@/shared/interfaces/interfaces';
import { login } from '@/shared/services/users/users.service';

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
        if (!credentials) throw new Error('Missing credentials');
        if (!credentials.email || !credentials.password)
          throw new Error('Missing credentials');
        const { email } = credentials;
        const response = await login(email, credentials.password);

        const { user: userData } = response;

        if (userData.error) {
          throw new Error('Credenciales incorrectas');
        }

        const user = {
          id: userData.id,
          email,
          token: userData.token,
          roles: [],
        } as any;

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
