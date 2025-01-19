import { IApibaseResponse } from '@/shared/interfaces/interfaces';
interface ILoginResponse {
  success: boolean;
  token: string;
  message: string;
  data: {
    userId: number;
    roles: string[];
  };
}
export interface ILoginApiResponse extends IApibaseResponse<ILoginResponse> {}
