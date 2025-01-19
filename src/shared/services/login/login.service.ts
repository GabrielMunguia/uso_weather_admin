import { API_ENDPOINTS } from '@/shared/utils/api-endpoints/api-endpoints';
import { ILoginApiResponse } from './interfaces';
import httpClient from '@/shared/utils/HttpClient';

export const login = async (
  email: string,
  password: string,
): Promise<ILoginApiResponse> => {
  const url = API_ENDPOINTS.LOGIN;
  const body = {
    email,
    password,
  };
  return httpClient.post<ILoginApiResponse>(url, body);
};
