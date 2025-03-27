/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getAuthHeaders } from '../actions/getAuthGeaders';

class HttpClient {
  constructor() {
    this.init();
  }

  private async init() {}

  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: await getAuthHeaders(),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.post(url, body, {
        headers: {
          ...(await getAuthHeaders()),
        },
      });
      return response.data;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async postFormData<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(await getAuthHeaders()),
        },
      });
      return response.data;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async patchFormData<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.patch(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(await getAuthHeaders()),
        },
      });
      return response.data;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async putFormData<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.put(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(await getAuthHeaders()),
        },
      });
      return response.data;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async put<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.put(url, body, {
        headers: await getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return this.handleError<T>(error);
    }
  }

  async patch<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.patch(url, body, {
        headers: await getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async delete<T>(url: string, payload?: any): Promise<T> {
    try {
      const response = await axios.delete(url, {
        data: payload,
        headers: await getAuthHeaders(),
      });
      return response.data;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  private handleError<T>(error: any): T {
    if (axios.isAxiosError(error)) {
      const responseApi = error.response?.data;
      return (responseApi as T) || ({ error: 'Unknown error' } as T);
    }
    return { error: 'Unknown error' } as T;
  }
}

const httpClient = new HttpClient();
export default httpClient;
