import { IApiBasePaginateResponse } from './../../interfaces/interfaces';

export interface ITrainingModelResponse {
  message: string;
  status: string;
  detail: string;
}

export interface IGetTrainingModelDataReq {
  startDate?: string; // Start date for filtering in 'YYYY-MM-DD HH:MM:SS' format
  endDate?: string; // End date for filtering in 'YYYY-MM-DD HH:MM:SS' format
  dateOrder?: 'asc' | 'desc'; // Order by date ('asc' or 'desc')
  search?: string; // Search term to filter across all fields
  page?: number; // Page number for pagination (default 1, minimum 1)
  pageSize?: number; // Page size for pagination (default 10, max 100, minimum 1)
}

export interface IClimatePredictionModel {
  id: string; // Unique identifier for the data record
  date: string; // Date of the record in ISO format
  indoorTemperature?: number | null; // Indoor temperature in Celsius
  temperature: number; // Outdoor temperature in Celsius
  thermalSensation?: number | null; // Thermal sensation in Celsius
  indoorDewPoint?: number | null; // Indoor dew point in Celsius
  dewPoint: number; // Outdoor dew point in Celsius
  indoorHeatIndex?: number | null; // Indoor heat index in Celsius
  heatIndex: number; // Outdoor heat index in Celsius
  indoorHumidity?: number | null; // Indoor humidity in percentage
  humidity: number; // Outdoor humidity in percentage
  maxWindGust?: number | null; // Maximum wind gust speed in km/h
  averageWindSpeed: number; // Average wind speed in km/h
  averageWindDirection: number; // Average wind direction in degrees
  atmosphericPressure: number; // Atmospheric pressure in hPa
  rainfall: number; // Rainfall in mm
  evapotranspiration?: number | null; // Evapotranspiration in mm
  rainfallIntensity: number; // Rainfall intensity in mm/h
  solarRadiation: number; // Solar radiation in W/m²
  uvIndex: number; // UV index
}

export interface IClimatePredictionModelAPI {
  _id: string; // Identificador único del registro de datos
  fecha: string; // Fecha del registro en formato ISO
  temperatura_interior?: number | null; // Temperatura interior en Celsius
  temperatura: number; // Temperatura exterior en Celsius
  sensacion_termica?: number | null; // Sensación térmica en Celsius
  punto_rocío_interior?: number | null; // Punto de rocío interior en Celsius
  punto_rocío: number; // Punto de rocío exterior en Celsius
  indice_calor_interior?: number | null; // Índice de calor interior en Celsius
  indice_calor: number; // Índice de calor exterior en Celsius
  humedad_interior?: number | null; // Humedad interior en porcentaje
  humedad: number; // Humedad exterior en porcentaje
  rafaga_maxima_viento?: number | null; // Ráfaga máxima de viento en km/h
  velocidad_media_viento: number; // Velocidad media del viento en km/h
  direccion_media_viento: number; // Dirección media del viento en grados
  presion_atmosferica: number; // Presión atmosférica en hPa
  lluvia: number; // Lluvia en mm
  evapotranspiracion?: number | null; // Evapotranspiración en mm
  intensidad_lluvia: number; // Intensidad de la lluvia en mm/h
  radiacion_solar: number; // Radiación solar en W/m²
  indice_uv: number; // Índice UV
}

export interface IMakeTrainingModel {
  message: string;
  status: string;
}
export interface IGetTrainingModelDataAPI
  extends IApiBasePaginateResponse<IClimatePredictionModelAPI> {}
export interface IGetTrainingModelDataResponse
  extends IApiBasePaginateResponse<IClimatePredictionModel> {}
