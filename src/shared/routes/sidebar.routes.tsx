import { AiOutlineCloudUpload, AiOutlineCloud } from 'react-icons/ai';
import { FaChartLine, FaTable, FaFileAlt } from 'react-icons/fa';

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
        path: '/dashboard/view-data',
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
    name: 'Predicciones y Reportes',
    icon: () => (
      <AiOutlineCloud className='text-white' width={30} height={30} />
    ),
    routes: [
      {
        path: '/dashboard/predictions',
        name: 'Generar Predicciones',
      },
      {
        path: '/dashboard/reports',
        name: 'Ver Reportes',
      },
    ],
  },
];
