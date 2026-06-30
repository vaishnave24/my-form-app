import axiosInstance from "../axioInstance/axiosInstance";

//login user service
export const loginUser = async (data) => {
  try {
    const result = axiosInstance.post("/login", data);
    return result;
  } catch (error) {
    throw error;
  }
};

//register api service
export const registerUser = async (data) => {
  try {
    const result = axiosInstance.post("/register", data);
  } catch (error) {
    throw error;
    console.log(error);
  }
};
