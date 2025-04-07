import axios from "axios";

const API_URL = "/api";

interface RegisterUserRequest {
  username: string;
  password: string;
}

interface LoginUserRequest {
  username: string;
  password: string;
}

interface JwtResponse {
  username: string;
  token: string;
}

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/token`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
