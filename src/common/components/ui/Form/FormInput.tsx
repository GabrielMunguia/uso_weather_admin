'use client';

import { Input } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined' | undefined;
  isUpperCase?: boolean;
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownEvent?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlurEvent?: () => void;
  maxLength?: number;
  minLength?: number;
  labelPlacement?: 'inside' | 'outside' | 'outside-left' | undefined;
}

const FormInput = ({
  name = '',
  label = '',
  onKeyDownEvent,
  onChangeEvent,
  placeholder = '',
  maxLength,
  type = 'text',
  className,
  variant = 'bordered',
  isUpperCase,
  onBlurEvent,
  labelPlacement = 'inside',
}: IProps) => {
  const form = useFormContext();
  const { control } = form;
  const { errors } = form.formState;
  const errorMessage = errors?.[name]?.message?.toString() ?? '';

  return (
    <div className='my-3 w-full'>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }} // Agrega tus reglas de validación aquí
        render={({ field: { onChange } }) => (
          <Input
            {...form.register(name)}
            name={name}
            label={label}
            onBlur={() => {
              onBlurEvent?.();
            }}
            value={form.watch(name)}
            type={type}
            variant={variant}
            className={`my-2 text-sm ${className}`}
            size='md'
            onKeyDown={(e) => {
              onKeyDownEvent?.(e);
            }}
            maxLength={maxLength ? maxLength : undefined}
            onChange={(e) => {
              let value = e.target.value;

              // Aplica la validación o transformación con regex si se proporciona
              const previousValue = form.getValues(name);
              const isDeleting = value.length < previousValue.length;

              // Solo aplica la máscara si el nuevo valor es más largo (es decir, no estamos eliminando)

              if (isUpperCase) {
                value = value.toUpperCase();
              }

              onChangeEvent?.(e);
              onChange({ target: { value } } as any); // Asegúrate de que el valor actualizado se pase al campo controlado
            }}
            labelPlacement={labelPlacement}
            placeholder={placeholder}
            isInvalid={!!errors[name]}
            errorMessage={errorMessage}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
