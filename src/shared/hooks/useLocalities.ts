import { IDepartement, IMunicipality } from '@/shared/interfaces/interfaces';
import { useEffect, useState } from 'react';

interface IOptions {
  label: string;
  value: string;
}

interface IParams {
  departaments: IDepartement[];
  municipalities: IMunicipality[];
}
export const useLocalities = ({ departaments, municipalities }: IParams) => {
  const [departamentList, setDepartamentList] = useState<IOptions[]>([]);
  const [municipalityList, setMunicipalityList] = useState<IOptions[]>([]);
  const [selectedDepartament, setSelectedDepartament] = useState<string | null>(
    null,
  );

  // Llenar la lista de departamentos al cargar el componente
  useEffect(() => {
    setDepartamentList(
      departaments.map((departament) => ({
        label: departament.name,
        value: departament.code,
      })),
    );
    if (departaments.length > 0) {
      setSelectedDepartament(departaments[0].code);
    }
  }, [departaments]);

  // Filtrar y actualizar la lista de municipios cuando cambia el departamento seleccionado
  useEffect(() => {
    if (selectedDepartament) {
      setMunicipalityList(
        municipalities
          .filter(
            (municipality) =>
              municipality.departamentCode === selectedDepartament,
          )
          .map((municipality) => ({
            label: municipality.name,
            value: municipality.code,
          })),
      );
    }
  }, [selectedDepartament, municipalities]);

  return {
    departamentList,
    municipalityList,
    selectedDepartament,
    setSelectedDepartament,
  };
};
