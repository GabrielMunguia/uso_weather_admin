import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox } from '@nextui-org/react';

interface IProps {
  name: string;
  label?: string;

  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
}

const FormInputCheckBox = ({
  name = '',
  label = '',
  color = 'default',
}: IProps) => {
  const form = useFormContext();
  const { control } = form;

  return (
    <div className='my-3 w-full'>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }} // Add your validation rules here
        render={({ field: { onChange, onBlur, value } }) => (
          <Checkbox
            defaultSelected
            color={color}
            isSelected={value}
            onValueChange={onChange}
            onBlur={onBlur}
          >
            {label}
          </Checkbox>
        )}
      />
    </div>
  );
};

export default FormInputCheckBox;
