import { IApiBasePaginateResponse } from '@/shared/interfaces/interfaces';

export interface ILoginResponse {
  user: {
    token: string;
    id: string;
    email: string;
    error?: string;
  };
}

export interface IUserData {
  id: string;
  username: string;
  name: string;
}
export interface IPaginationUserApi
  extends IApiBasePaginateResponse<IUserData> {}

export interface IGetOneUserResponseApi {
  status: string;
  data: IUserData;
}

export interface IUpdateUserResponse {
  status: string;
}

export interface IUpdateUserReq {
  username: string;
  name: string;
}

export interface ICreateUserReq {
  username: string;
  name: string;
}

export interface ICreateUserResponse {
  user: {
    username: string;
    name: string;
    id: string;
    message?: string;
    status?: string;
  };
}

export interface IDeleteUserResponse {
  status: string;
  message: string;
}
export interface IGenerateNewPasswordResponse {
  status: string;
  message: string;
}
