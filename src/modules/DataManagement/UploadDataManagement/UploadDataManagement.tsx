'use client';
import Title from '@/common/components/shared/Titlte/Title';
import Form from '@/common/components/ui/Form/Form';
import FormInput from '@/common/components/ui/Form/FormInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { UploadDataValidations } from './validations/upload-data-management.validations';
import FormInputFile from '@/common/components/ui/Form/FormInputFile ';
import { toast } from 'sonner';
import { uploadCSVToTrainingModel } from '@/shared/services/trainning-model/trainning_model.service';

const UploadDataManagement = () => {
  const form = useForm({
    defaultValues: {
      csv: '',
    },
    resolver: zodResolver(UploadDataValidations),
  });

  const onHandleSubmit = form.handleSubmit(async (data) => {
    const loading = toast.loading('Subiendo CSV');

    try {
      const response = await uploadCSVToTrainingModel(data.csv as any);
      toast.dismiss(loading);
      if (response.status == 'ok') {
        toast.success('Se cargo el archivo correctamente');
        return;
      }

      toast.error(
        `Ocurrio un error al cargar el CSV: ${response?.detail ?? ''}`,
      );
    } catch (error) {
      toast.dismiss(loading);
      toast.error('Ocurrio un error al cargar el CSV!');
    } finally {
      form.reset();
    }
  });
  return (
    <Form
      form={form}
      breadcrumb={[
        { href: '/dashboard/list-data', label: 'Listar datos cargados' },
      ]}
      currentTabName='Cargar CSV'
    >
      <div className='flex w-full justify-center'>
        <div className='max-w-full w-[30rem]'>
          <section>
            <Title title='Subir archivo CSV' />
            <FormInputFile
              accept='csv'
              name='csv'
              label={'Seleccionar archivo CSV'}
            />
            <Button
              onPress={() => onHandleSubmit()}
              color='primary'
              className='w-full'
              isLoading={form.formState.isSubmitting}
            >
              <FaCloudUploadAlt />
              Subir Archivo
            </Button>
          </section>

          <section>
            <p className='font-bold  my-3 '>Formato esperado:</p>
            <div>
              <Link
                target='_blank'
                href='/assets/examples/example.csv'
                download
                className='text-sm text-blue-600'
              >
                Descargar ejemplo de CSV
              </Link>
              <p className='text-sm text-gray-500 leading-relaxed'>
                {' '}
                El archivo CSV debe tener las siguientes columnas:
              </p>

              <ul className='mt-2 text-sm list-disc list-inside font-semibold'>
                <li>Fecha (America/El_Salvador)</li>
                <li>Temperatura interior (°C)</li>
                <li>Temperatura (°C)</li>
                <li>Sensación térmica (°C)</li>
                <li>Punto de rocío interior (°C)</li>
                <li>Punto de rocío (°C)</li>
                <li>Índice de calor interior (°C)</li>
                <li>Índice de calor (°C)</li>
                <li>Humedad interior (%)</li>
                <li>Humedad (%)</li>
                <li>Ráfaga máxima de viento (m/s)</li>
                <li>Velocidad media del viento (m/s)</li>
                <li>Dirección media del viento (°)</li>
                <li>Presión atmosférica (hPa)</li>
                <li>Lluvia (mm)</li>
                <li>Evapotranspiración (mm)</li>
                <li>Intensidad de lluvia (mm/h)</li>
                <li>Radiación solar (W/m²)</li>
                <li>Índice UV</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Form>
  );
};

export default UploadDataManagement;
