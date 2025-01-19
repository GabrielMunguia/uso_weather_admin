import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Select, SelectItem } from '@nextui-org/react';

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined' | undefined;

  options: {
    value: string;
    label: string;
  }[];
  onChangeEvent?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormInputSelect = ({
  name = '',
  label = '',
  placeholder = '',
  options,
  onChangeEvent,
  className = '',
  variant = undefined,
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
        rules={{ required: true }} // Add your validation rules here
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            label={label}
            placeholder={placeholder}
            onBlur={onBlur}
            selectedKeys={value ? [value] : []}
            disallowEmptySelection
            variant={variant}
            className={` ${className}`}
            onChange={(e) => {
              onChange(e);
              if (onChangeEvent) {
                onChangeEvent(e);
              }
            }}
            value={value}
            isInvalid={!!errors[name]}
            errorMessage={errorMessage}
          >
            {options.map((opc) => (
              <SelectItem key={opc.value} value={opc.value}>
                {opc.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default FormInputSelect;
