import {
  IClimatePredictionModel,
  IClimatePredictionModelAPI,
} from '../services/trainning-model/interface';

export function adapterClimatePredictionModel(
  data: IClimatePredictionModelAPI,
): IClimatePredictionModel {
  return {
    id: data._id,
    date: data.fecha,
    indoorTemperature: data.temperatura_interior,
    temperature: data.temperatura,
    thermalSensation: data.sensacion_termica,
    indoorDewPoint: data.punto_rocío_interior,
    dewPoint: data.punto_rocío,
    indoorHeatIndex: data.indice_calor_interior,
    heatIndex: data.indice_calor,
    indoorHumidity: data.humedad_interior,
    humidity: data.humedad,
    maxWindGust: data.rafaga_maxima_viento,
    averageWindSpeed: data.velocidad_media_viento,
    averageWindDirection: data.direccion_media_viento,
    atmosphericPressure: data.presion_atmosferica,
    rainfall: data.lluvia,
    evapotranspiration: data.evapotranspiracion,
    rainfallIntensity: data.intensidad_lluvia,
    solarRadiation: data.radiacion_solar,
    uvIndex: data.indice_uv,
  };
}
