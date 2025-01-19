'use client';
import Form from '@/common/components/ui/Form/Form';
import FormInput from '@/common/components/ui/Form/FormInput';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidations } from './validations/login.validation';
import Logo from '@/common/widget/logo/Logo';

const FormLogin = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginValidations),
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    const { email, password } = data;
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      router.replace('/dashboard');
      return;
    }
    toast.error('Invalid credentials');
  });

  return (
    <div className='flex min-h-screen justify-center items-center shadow-xl border '>
      <div className='max-w-full w-[30rem] p-3'>
        <Form form={form}>
          <Logo />
          <p className='font-semibold'>Inicia sesión</p>
          <FormInput name='email' label='Email' />
          <FormInput name='password' label='Password' type='password' />
          <Button
            color='primary'
            className='w-full'
            onClick={handleSubmit}
            isLoading={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? 'Iniciando sesión'
              : 'Iniciar sesión'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormLogin;
