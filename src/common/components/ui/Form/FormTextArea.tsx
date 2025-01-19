import { Textarea } from '@nextui-org/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined' | undefined;
}

const FormTextArea = ({
  name = '',
  label = '',
  placeholder = '',
  className,
  variant = 'bordered',
}: IProps) => {
  const form = useFormContext();
  const { errors } = form.formState;
  const errorMessage = errors?.[name]?.message?.toString() ?? '';

  return (
    <div className='my-3 w-full'>
      <Textarea
        {...form.register(name)}
        name={name}
        className={`my-2 text-sm ${className}`}
        label={label}
        value={form.watch(name)}
        variant={variant}
        labelPlacement='inside'
        placeholder={placeholder}
        isInvalid={!!errors[name]}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default FormTextArea;
