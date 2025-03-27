'use server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export const getAuthHeaders = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session = (await getServerSession(authOptions)) as any;
  console.log({ user: session?.user });
  return {
    Authorization: `Bearer ${session?.user?.token}`,
  };
};
