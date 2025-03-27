'use client';

import { useConfirm } from '@/common/components/shared/Modals/ConfirmModal/hooks/useConfirm';
import Title from '@/common/components/shared/Titlte/Title';
import Form from '@/common/components/ui/Form/Form';
import FormInput from '@/common/components/ui/Form/FormInput';
import { IUserData } from '@/shared/services/users/interfaces';
import {
  deleteUser,
  generateNewPassword,
  registerUser,
  updateUser,
} from '@/shared/services/users/users.service';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface IProps {
  userData?: IUserData;
}
const FormUser = ({ userData }: IProps) => {
  const router = useRouter();
  const { ask } = useConfirm();
  const form = useForm({
    defaultValues: {
      username: userData?.username || '',
      name: userData?.name || '',
    },
  });

  const deleteHandler = async () => {
    if (!userData) return;
    const isConfirmed = await ask('¿Estas seguro de eliminar este usuario?');
    if (!isConfirmed) return;
    const loading = toast.loading('Cargando...');
    try {
      const response = await deleteUser(userData.id);
      if (response.status == 'success') {
        toast.dismiss(loading);
        toast.success('Usuario eliminado');
        router.push('/dashboard/users');
        return;
      }
      toast.dismiss(loading);
      return toast.error('Error al eliminar usuario');
    } catch (e) {
      toast.dismiss(loading);
      toast.error('Error al eliminar usuario');
    }
  };

  const genNewPassword = async () => {
    if (!userData) return;
    const isConfirmed = await ask(
      '¿Estas seguro de generar una nueva contraseña para este usuario?',
    );
    if (!isConfirmed) return;
    const loading = toast.loading('Cargando...');
    try {
      const response = await generateNewPassword(userData.username);
      if (response.status == 'success') {
        toast.dismiss(loading);
        toast.success('Se envio una nueva contraseña al correo del usuario');
        router.push('/dashboard/users');
        return;
      }
      toast.dismiss(loading);
      return toast.error('Error generar nueva contraseña');
    } catch (e) {
      toast.dismiss(loading);
      toast.error('Error al generar nueva contraseña');
    }
  };

  const handleSubmit = form.handleSubmit(async (data) => {
    const loading = toast.loading('Cargando...');
    try {
      if (userData?.username) {
        // Update user
        const response = await updateUser(userData.id, data);
        if (response.status == 'success') {
          toast.dismiss(loading);
          toast.success('Usuario actualizado');
          return;
        }
        toast.dismiss(loading);
        return toast.error('Error al actualizar usuario');
      }

      const response = await registerUser(data);
      if (response.user?.status == 'error') {
        toast.dismiss(loading);
        return toast.error(response.user.message);
      }
      if (response.user) {
        toast.dismiss(loading);
        toast.success('Usuario creado');
        router.push('/dashboard/users/form/' + response.user.id);
        return;
      }
      toast.dismiss(loading);
      return toast.error('Error al procesar ');
    } catch (e) {
      toast.dismiss(loading);
      toast.error('Error al procesar');
    }
  });

  return (
    <Form
      form={form}
      currentTabName={userData?.username ? 'Editar usuario' : 'Crear usuario'}
      breadcrumb={[{ label: 'Usuarios', href: '/dashboard/users' }]}
    >
      {userData ? (
        <section className='flex justify-end items-center'>
          <Button
            color='danger'
            className='mr-2'
            size='sm'
            onPress={() => deleteHandler()}
          >
            Eliminar usuario
          </Button>
          <Button
            color='success'
            className='mr-2'
            size='sm'
            onPress={() => genNewPassword()}
          >
            Generar contraseña nueva
          </Button>
        </section>
      ) : null}

      <section className='flex flex-col justify-center items-center'>
        <Title
          title={userData?.username ? 'Editar usuario' : 'Crear usuario'}
        />
        <div className='max-w-full w-[40rem]'>
          <FormInput name='username' label='Correo electronico' />
          <FormInput name='name' label='Nombre' />
          <Button
            onPress={() => handleSubmit()}
            color='primary'
            className='w-full mt-4'
            isLoading={form.formState.isSubmitting}
          >
            {userData?.username ? 'Actualizar usuario' : 'Crear usuario'}
          </Button>
        </div>
      </section>
    </Form>
  );
};

export default FormUser;
