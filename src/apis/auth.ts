import { axiosConfig } from "../utils/axiosConfig";

export const register = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/user/register",
    data,
  });
};

export const login = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/user/login",
    data,
  });
};
