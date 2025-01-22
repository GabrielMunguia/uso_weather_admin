'use client';

import Title from '@/common/components/shared/Titlte/Title';
import { usePaginationApi } from '@/shared/hooks/usePaginationApi';
import type { IUserData } from '@/shared/services/users/interfaces';
import { getPaginationUsers } from '@/shared/services/users/users.service';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Pagination,
  Card,
  Input,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

const ListUsers = () => {
  const [search, setSearch] = useState('');
  const { data, loading, page, setData, setPage, totalPages } =
    usePaginationApi<IUserData>({
      callback: getPaginationUsers,
      search,
      limit: 10,
    });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Card className='w-full mx-auto p-3'>
      <Title title='Lista de usuarios' />

      <section className='flex justify-end'>
        <Button
          size='sm'
          color='success'
          as={Link}
          href='/dashboard/users/form'
        >
          Crear usuario
        </Button>
      </section>
      <section className='my-3'>
        <Input
          size='sm'
          placeholder='Buscar por nombre'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <Table
        aria-label='Users table with pagination'
        bottomContent={
          <div className='flex w-full justify-center'>
            <Pagination
              isCompact
              showControls
              showShadow
              color='primary'
              page={page}
              total={totalPages}
              onChange={handlePageChange}
            />
          </div>
        }
      >
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Correo</TableColumn>

          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody
          emptyContent={<div>Sin resultados</div>}
          items={data}
          loadingContent={<div>Loading...</div>}
          loadingState={loading ? 'loading' : 'idle'}
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.username}</TableCell>

              <TableCell>
                <Button
                  size='sm'
                  as={Link}
                  href={`/dashboard/users/form/${item.id}`}
                  color='primary'
                >
                  Ver detalle
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ListUsers;
