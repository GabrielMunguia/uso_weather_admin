import ErrorPage from '@/common/components/shared/Errors/ErrorPage';
import FormUser from '@/modules/Users/FormUser/FormUser';
import { getOneUser } from '@/shared/services/users/users.service';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const userData = await getOneUser(id ?? '');
  if (!userData?.data?.id) {
    return (
      <ErrorPage
        description='El usuario que intentas buscar no existe'
        titlee='Usuario no encontrado'
        href='/dashboard/users'
      />
    );
  }
  return <FormUser userData={userData.data} />;
};

export default page;
export const revalidate = 0;
