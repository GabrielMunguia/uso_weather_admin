'use client';

import { useConfirm } from '@/common/components/shared/Modals/ConfirmModal/hooks/useConfirm';
import { trainModel } from '@/shared/services/trainning-model/trainning_model.service';
import { Card, CardHeader, CardFooter, Button } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'sonner';

const TrainingModel = () => {
  const [isTraining, setIsTraining] = useState(false);
  const { ask } = useConfirm();
  const handleTraining = async () => {
    try {
      const isConfirm = await ask(
        '¿Estás seguro de que deseas entrenar el modelo?',
      );
      if (!isConfirm) return;
      setIsTraining(true);
      const resp = await trainModel();
      toast.success(
        resp?.message || 'Modelo entrenado correctamente y archivos generados',
      );
      setIsTraining(false);
    } catch (error) {
      setIsTraining(false);
      toast.error('Ocurrió un error al intentar entrenar el modelo');
      console.error(error);
    }

    // Aquí iría la lógica para iniciar el entrenamiento
    console.log(`Iniciando entrenamiento para el modelo: `);
  };

  return (
    <div className='flex justify-center '>
      <Card className='w-full max-w-md'>
        <CardHeader className='flex-col items-start px-4 pt-4'>
          <h4 className='text-2xl font-bold text-gray-800 dark:text-white'>
            Entrenar modelo
          </h4>{' '}
          <p className='text-sm text-gray-500'>
            {' '}
            Al presionar el botón, se reentrenará el modelo y se generarán
            nuevos archivos .pkl.{' '}
          </p>
        </CardHeader>

        <CardFooter className='px-4 pb-4'>
          <Button
            color='primary'
            className='w-full'
            onPress={handleTraining}
            isLoading={isTraining}
          >
            {isTraining ? 'Entrenando...' : 'Entrenar Modelo'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrainingModel;
