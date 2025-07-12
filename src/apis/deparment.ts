import { axiosConfig } from "../utils/axiosConfig";

export const getAllDepartment = async () => {
  return await axiosConfig({
    method: "get",
    url: "/department",
  });
};

export const getDepartmentById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/department/getById/id=${id}`,
  });
};

export const createDepartment = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/department/create",
    data,
  });
};

export const deleteDepartment = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/department/id=${id}`,
  });
};
