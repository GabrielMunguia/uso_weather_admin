'use client';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DropDownMenu = () => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          className='mr-[4rem] cursor-pointer'
          src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem key='profile1'>Perfil</DropdownItem>
        <DropdownItem
          key='config'
          onClick={() => router.push('/dashboard/configurations')}
        >
          Configuraciones
        </DropdownItem>

        <DropdownItem
          key='delete'
          className='text-danger'
          color='danger'
          onClick={() => signOut()}
        >
          Cerrar sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownMenu;
