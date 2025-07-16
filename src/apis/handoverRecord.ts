import { axiosConfig } from "../utils/axiosConfig";

export const getAllHandoverRecord = async () => {
  return await axiosConfig({
    method: "get",
    url: "/handoverRecord",
  });
};

export const getHandoverRecordById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/handoverRecord/getById?id=${id}`,
  });
};

export const createHandoverRecord = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/handoverRecord/create",
    data,
  });
};

export const deleteHandoverRecord = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/handoverRecord/delete?id=${id}`,
  });
};
