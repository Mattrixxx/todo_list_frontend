import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
