'use client';

import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import { Input } from '@nextui-org/react';
import { FiUploadCloud } from 'react-icons/fi';

interface IProps {
  name: string;
  label?: string;
  placeholder?: string;
  accept?: string;
}

const FormInputFile = ({
  name = '',
  label = 'Seleccionar archivo',
  placeholder = 'Ningún archivo seleccionado',
  accept = '.csv',
}: IProps) => {
  const form = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFilePreview: React.ChangeEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      form.setValue(name, null);
      setFileName(null);
      return;
    }

    const ext = file.name.split('.').pop()?.toLowerCase();
    const validExtensions = accept
      .split(',')
      .map((ext) => ext.replace('.', '').trim().toLowerCase());

    if (!ext || !validExtensions.includes(ext)) {
      form.setValue(name, null);
      setFileName(null);
      toast.error(`El archivo debe ser de tipo: ${accept}`);
      return;
    }

    setFileName(file.name);
    form.setValue(name, file);
  };

  useEffect(() => {
    if (!form.getValues(name)) {
      setFileName(null);
    }
  }, [form, name]);

  return (
    <div className='relative w-full my-2'>
      <Input
        type='text'
        label={label}
        placeholder={placeholder}
        value={fileName || ''}
        endContent={<FiUploadCloud />}
        readOnly
        className=' cursor-pointer'
        onClick={() => inputRef.current?.click()}
      />

      <input
        type='file'
        accept={accept}
        {...form.register(name)}
        onChange={handleFilePreview}
        className='hidden'
        ref={inputRef}
      />
    </div>
  );
};

export default FormInputFile;
