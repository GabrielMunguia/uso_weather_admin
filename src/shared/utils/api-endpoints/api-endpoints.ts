const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  REGISTER: `${API_URL}/auth/register`,
  DELETE_USER: `${API_URL}/auth/users`,
  GENERATE_NEW_PASSWORD: `${API_URL}/auth/users`,
  LIST_USERS: `${API_URL}/auth/users`,
  GET_USER: `${API_URL}/auth/users`,
  UPLOAD_TRAINING_csv: `${API_URL}/traning`,
  LIST_DATA_TRAINING_MODEL: `${API_URL}/traning/list`,
  DELETE_DATA: `${API_URL}/traning/`,
  TRAINING_MODEL: `${API_URL}/traning/`,
};
