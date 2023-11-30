import { API } from "@/global/instances";
import axios from "axios";

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

export const PhotoUploadToImageBB = async (data) => {
  try {
    const url = `https://api.imgbb.com/1/upload?key=2e776485f3d339011e2d25b4f61ba6a1`;
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};
