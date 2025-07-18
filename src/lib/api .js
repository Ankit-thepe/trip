import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

export const loginAPi = async({ input, password }) => {
  const response = await axios.put(`${API_BASE_URL}/auth/login`, {
    input,
    password
  });
  return response.data;
}

export const PartnerFormApi = async (formData) => {
  const token = localStorage.getItem('authToken');
  const response = await axios.post(
    `${API_BASE_URL}/serviceCenters/register-service-center`,
    formData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  return response.data;
}

