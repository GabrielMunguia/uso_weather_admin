export interface IUser {
  id: number;
  email: string;
  roles: string[];
}

export interface IApibaseResponse<T> {
  status: boolean;
  message: string;
  errors?: string[];
  statusCode: number;
  result: T;
}

export interface IPaginateApi<T> {
  data: T[];
  total: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface IApiBasePaginateResponse<T>
  extends IApibaseResponse<IPaginateApi<T>> {}

export interface IPaginationQuery {
  page: number;
  limit?: number;
  search?: string;
}
