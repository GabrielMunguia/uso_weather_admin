import httpClient from '@/shared/utils/HttpClient';
import {
  IGetTrainingModelDataAPI,
  IGetTrainingModelDataReq,
  IGetTrainingModelDataResponse,
  IMakeTrainingModel,
  ITrainingModelResponse,
} from './interface';
import { API_ENDPOINTS } from '@/shared/utils/api-endpoints/api-endpoints';
import { adapterClimatePredictionModel } from '@/shared/adapters/climatePredictionModel.adapter';

export const uploadCSVToTrainingModel = async (
  file: File,
): Promise<ITrainingModelResponse> => {
  const response = await httpClient.postFormData<ITrainingModelResponse>(
    API_ENDPOINTS.UPLOAD_TRAINING_csv,
    {
      file,
    },
  );

  return response;
};

export const listTrainingModelData = async (
  req: IGetTrainingModelDataReq,
): Promise<IGetTrainingModelDataResponse> => {
  let url = `${API_ENDPOINTS.LIST_DATA_TRAINING_MODEL}?`;

  const { startDate, endDate, dateOrder, page, pageSize, search } = req;

  const params = new URLSearchParams();

  if (startDate) params.append('startDate', startDate);
  if (endDate) params.append('endDate', endDate);
  params.append('dateOrder', 'desc');
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (search) params.append('search', search);

  url += params.toString();

  const response = await httpClient.get<IGetTrainingModelDataAPI>(url);
  const parserResponse: IGetTrainingModelDataResponse = {
    ...response,
    result: {
      ...response.result,
      data: response.result.data.map((v) => adapterClimatePredictionModel(v)),
    },
  };
  return parserResponse;
};

export const trainModel = async (): Promise<IMakeTrainingModel> => {
  const response = await httpClient.get<IMakeTrainingModel>(
    API_ENDPOINTS.TRAINING_MODEL,
  );
  return response;
};
