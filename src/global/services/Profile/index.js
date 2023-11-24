import { API } from "@/global/instances";

// update user function
export const UpdateUser = async (data) => {
  try {
    const url = `/users/profile`;
    const response = await API.patch(url, data);
    return response;
  } catch (error) {
    return error;
  }
};
