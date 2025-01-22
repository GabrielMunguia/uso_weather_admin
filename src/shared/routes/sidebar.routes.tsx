import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaChartLine, FaUsers } from 'react-icons/fa';
import { JSX } from 'react';

type JSXElement = () => JSX.Element;

export interface IRoutesSidebar {
  name: string;
  icon?: JSXElement;
  routes: {
    path: string;
    name: string;
    preFetch?: boolean;
  }[];
}

export const getIcon = (icon: JSXElement) => {
  return icon;
};

export const sidebarRoutes: IRoutesSidebar[] = [
  {
    name: 'Gestión de Datos',
    icon: () => (
      <AiOutlineCloudUpload className='text-white' width={30} height={30} />
    ),
    routes: [
      {
        path: '/dashboard/upload-data',
        name: 'Cargar Datos',
      },
      {
        path: '/dashboard/list-data',
        name: 'Ver Datos Cargados',
      },
    ],
  },
  {
    name: 'Entrenamiento del Modelo',
    icon: () => <FaChartLine className='text-white' width={30} height={30} />,
    routes: [
      {
        path: '/dashboard/train-model',
        name: 'Entrenar Modelo',
      },
    ],
  },
  {
    name: 'Gestion de usuarios',
    icon: () => <FaUsers className='text-white' width={30} height={30} />,
    routes: [
      {
        path: '/dashboard/users',
        name: 'Ver usuarios',
      },
      {
        path: '/dashboard/users/form',
        name: 'Agregar usuario',
      },
    ],
  },
];
