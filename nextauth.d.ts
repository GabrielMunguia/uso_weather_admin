import { IUser } from '@/shared/types/interfaces';
declare module 'next-auth' {
  interface User extends IUser {
    id: number;
    email: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
