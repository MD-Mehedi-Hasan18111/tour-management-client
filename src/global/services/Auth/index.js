import { API } from "@/global/instances";

export const RegisterUser = async (data) => {
  try {
    const url = `/users/signup-user`;
    const response = await API.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

// login service function