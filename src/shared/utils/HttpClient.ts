import axios from 'axios';

class HttpClient {
  public myHeaders: { [key: string]: string } = {};

  constructor() {
    this.myHeaders = {};
  }
  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }
  async post<T>(url: string, body: any, header: any = {}): Promise<T> {
    try {
      const response = await axios.post(url, body, header);
      const result = await response.data;
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async postFormData<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.data;
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async patchFormData<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.patch(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.data;
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  async putFormData<T>(url: string, body: any): Promise<T> {
    try {
      const response = await axios.put(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.data;
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }
  async put<T>(url: string, body: any): Promise<T> {
    const response = await axios.put(url, body);
    const result = await response.data;

    return result;
  }
  async patch<T>(url: string, body: any): Promise<T> {
    const response = await axios.patch(url, body);
    const result = await response.data;

    return result;
  }
  async delete<T>(url: string, payload?: any): Promise<T> {
    try {
      if (!payload) {
        payload = {};
      }
      const response = await axios.delete(url, { data: payload });
      const result = await response.data;
      return result;
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  private handleError<T>(error: any): T {
    if (axios.isAxiosError(error)) {
      const responseApi = error.response?.data;
      if (responseApi) {
        return responseApi;
      }
      return { error: 'Unknown error' } as unknown as T;
    }
    return { error: 'Unknown error' } as unknown as T;
  }
}

const httpClient = new HttpClient();
export default httpClient;
