import { useSession } from 'next-auth/react';

export const useUser = () => {
  const { data: session, update } = useSession();
  const user = session?.user;

  const updateUserSession = async (data: any) => {
    const newSession = {
      ...session,
      user: {
        ...session?.user,
        ...data,
      },
    };

    await update(newSession);
  };
  return { user, updateUserSession };
};
