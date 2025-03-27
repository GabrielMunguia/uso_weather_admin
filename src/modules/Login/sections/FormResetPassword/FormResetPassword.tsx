'use client';
import Form from '@/common/components/ui/Form/Form';
import FormInput from '@/common/components/ui/Form/FormInput';
import { Button } from '@nextui-org/react';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidations } from './validations/login.validation';
import Logo from '@/common/widget/logo/Logo';
import { generateNewPassword } from '@/shared/services/users/users.service';

interface IProps {
  onShowResetPassword: () => void;
}
const FormResetPassword = ({ onShowResetPassword }: IProps) => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(loginValidations),
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log('x');
    const { email } = data;
    const response = await generateNewPassword(email);
    console.log({ response });

    if (response.status == 'success') {
      toast.success('Se envio una nueva contraseña al correo del usuario');
      onShowResetPassword();
      return;
    }
    toast.error('Ocurrio un error intenta mas tarde');
  });

  return (
    <div className='flex min-h-screen justify-center items-center shadow-xl border '>
      <div className='max-w-full w-[30rem] p-3'>
        <Form form={form}>
          <Logo />
          <p className='font-semibold'>Recuperar contraseña</p>
          <FormInput name='email' label='Email' />

          <Button
            color='warning'
            className='w-full'
            onPress={() => handleSubmit()}
            isLoading={form.formState.isSubmitting}
          >
            Recuperar contraseña
          </Button>
          <p
            className='my-3 font-semibold  cursor-pointer  '
            onClick={() => onShowResetPassword()}
          >
            Iniciar sesion
          </p>
        </Form>
      </div>
    </div>
  );
};

export default FormResetPassword;
