import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
const defaultImage = '/assets/img/icons/no-image.svg';
import Image from 'next/image';

import { toast } from 'sonner';
import { Button } from '@nextui-org/react';
interface IProps {
  name: string;
  label?: string;
  image?: string;
}
const FormInputImage = ({
  name = '',
  label = '',
  image = defaultImage,
}: IProps) => {
  const form = useFormContext();
  const [imageShow, setImageShow] = useState(
    image !== '' && image.length > 3 && image ? image : defaultImage,
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleImagePreview: React.ChangeEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    const file = e.target.files?.[0];
    //validar que sea una imagen o dejarlo null
    const ext = file?.name.split('.').pop();
    const validExtensions = ['jpg', 'png', 'jpeg', 'webp'];

    if (!ext || !validExtensions.includes(ext)) {
      form.setValue(name, null);
      setImageShow(defaultImage);
      toast.error('El archivo no es una imagen');
      return;
    }
    if (!file) return;
    const image = URL.createObjectURL(file);
    setImageShow(image);
    form.setValue(name, file);
  };

  useEffect(() => {
    if (image) {
      setImageShow(image);
    }
  }, [image]);

  return (
    <div className='w-full flex flex-col items-center bg-rose-5'>
      <div className='flex justify-center relative w-full h-[10em] mt-3'>
        <Image
          src={imageShow}
          alt='image'
          width={300}
          height={300}
          className='mx-3 object-contain '
        />
      </div>
      <div className='flex justify-center mt-4 w-full'>
        <Button
          color='primary'
          variant='ghost'
          className='rounded text-black'
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          {label}
        </Button>
      </div>

      <input
        type='file'
        accept='image'
        {...form.register(name)}
        onChange={handleImagePreview}
        className='hidden'
        ref={inputRef}
      />
    </div>
  );
};

export default FormInputImage;
