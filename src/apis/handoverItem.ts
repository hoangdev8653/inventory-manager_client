import { axiosConfig } from "../utils/axiosConfig";

export const getAllHandoverItem = async () => {
  return await axiosConfig({
    method: "get",
    url: "/handoverItem",
  });
};

export const getHandoverItemById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/handoverItem/${id}`,
  });
};

export const getByHandoverRecordId = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/handoverItem/getByHandoverRecordId?id=${id}`,
  });
};

export const createHandoverItem = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/handoverItem",
    data,
  });
};

export const deleteHandoverItem = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/handoverItem/${id}`,
  });
};
