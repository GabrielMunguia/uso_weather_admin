import { API_ENDPOINTS } from '@/shared/utils/api-endpoints/api-endpoints';

import httpClient from '@/shared/utils/HttpClient';
import {
  ILoginResponse,
  IPaginationUserApi,
  IGetOneUserResponseApi,
  IUpdateUserReq,
  IUpdateUserResponse,
  ICreateUserReq,
  ICreateUserResponse,
  IDeleteUserResponse,
  IGenerateNewPasswordResponse,
} from './interfaces';

export const login = async (
  email: string,
  password: string,
): Promise<ILoginResponse> => {
  const url = API_ENDPOINTS.LOGIN;
  const body = {
    username: email,
    password,
  };
  const resp = await httpClient.post<ILoginResponse>(url, body);

  return resp;
};

export interface IGetPaginationUserReq {
  page: number;
  limit: number;
  search?: string;
}
export const getPaginationUsers = async ({
  page,
  limit,
  search,
}: IGetPaginationUserReq): Promise<IPaginationUserApi> => {
  const url = `${API_ENDPOINTS.LIST_USERS}?page=${page}&limit=${limit}&email_search=${search}`;
  const resp = await httpClient.get<IPaginationUserApi>(url);
  return resp;
};

export const getOneUser = async (
  id: string,
): Promise<IGetOneUserResponseApi> => {
  const url = `${API_ENDPOINTS.LIST_USERS}/${id}`;
  const resp = await httpClient.get<IGetOneUserResponseApi>(url);
  return resp;
};

export const updateUser = async (
  id: string,
  data: IUpdateUserReq,
): Promise<IUpdateUserResponse> => {
  const url = `${API_ENDPOINTS.LIST_USERS}/${id}`;
  const resp = await httpClient.put<IUpdateUserResponse>(url, data);
  return resp;
};

export const registerUser = async (
  data: ICreateUserReq,
): Promise<ICreateUserResponse> => {
  const url = API_ENDPOINTS.REGISTER;
  const resp = await httpClient.post<ICreateUserResponse>(url, data);
  return resp;
};

export const deleteUser = async (
  userId: string,
): Promise<IDeleteUserResponse> => {
  const url = `${API_ENDPOINTS.DELETE_USER}/${userId}`;
  const resp = await httpClient.delete<IDeleteUserResponse>(url);
  return resp;
};

export const generateNewPassword = async (
  userId: string,
): Promise<IGenerateNewPasswordResponse> => {
  const url = `${API_ENDPOINTS.GENERATE_NEW_PASSWORD}/${userId}/send-new-password`;
  const resp = await httpClient.put<IGenerateNewPasswordResponse>(url, {});
  return resp;
};
