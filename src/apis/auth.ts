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

export const getAllUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "/user",
  });
};

export const updateRole = async (data: string) => {
  return await axiosConfig({
    method: "get",
    url: "/user/updateRole",
    data,
  });
};

export const deleteUser = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/user/deleteUser?id=${id}`,
  });
};
