'use client';

import { useConfirm } from '@/common/components/shared/Modals/ConfirmModal/hooks/useConfirm';
import Title from '@/common/components/shared/Titlte/Title';
import { usePaginationApi } from '@/shared/hooks/usePaginationApi';
import { IClimatePredictionModel } from '@/shared/services/trainning-model/interface';
import { listTrainingModelData } from '@/shared/services/trainning-model/trainning_model.service';

import {
  Button,
  Chip,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Link from 'next/link';

const ListDataManagement = () => {
  const {
    data: records,
    loading,
    page,
    totalPages,

    setPage,
  } = usePaginationApi<IClimatePredictionModel>({
    callback: listTrainingModelData,
  });

  return (
    <div>
      <Title title='Datos cargados'></Title>
      <Table
        selectionMode='single'
        color='primary'
        aria-label='Datos de Predicción Climática'
        bottomContent={
          <div className='flex w-full justify-center'>
            <Pagination
              isCompact
              showControls
              showShadow
              color='primary'
              page={page}
              total={totalPages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: 'min-h-[222px]',
        }}
      >
        <TableHeader>
          <TableColumn key='date' className='w-1/6'>
            Fecha
          </TableColumn>
          <TableColumn key='temperature' className='w-1/6'>
            Temperatura (°C)
          </TableColumn>
          <TableColumn key='humidity' className='w-1/6'>
            Humedad (%)
          </TableColumn>
          <TableColumn key='rainfall' className='w-1/6'>
            Lluvia (mm)
          </TableColumn>

          <TableColumn key='actions' className='w-1/6'>
            Acciones
          </TableColumn>
        </TableHeader>

        <TableBody
          items={records ?? []}
          loadingState={loading && records.length > 0 ? 'loading' : undefined}
          loadingContent={
            <div className='mt-10'>
              <Spinner />
            </div>
          }
          emptyContent={
            loading ? (
              <div className='mt-10'>
                <Spinner />
              </div>
            ) : (
              <div className='text-center'>No hay datos</div>
            )
          }
        >
          {(record) => (
            <TableRow key={record.id} className='cursor-pointer'>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.temperature}</TableCell>
              <TableCell>{record.humidity}</TableCell>
              <TableCell>{record.rainfall}</TableCell>

              <TableCell className='flex gap-1'>
                <Button
                  color='warning'
                  as={Link}
                  href={`/dashboard/records/edit/${record.id}`}
                >
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListDataManagement;
