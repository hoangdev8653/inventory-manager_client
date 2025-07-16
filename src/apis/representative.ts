import { axiosConfig } from "../utils/axiosConfig";

export const getAllRepresentative = async () => {
  return await axiosConfig({
    method: "get",
    url: "/representative",
  });
};

export const getRepresentativeById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/representative/getById?id=${id}`,
  });
};

export const createRepresentative = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/representative/create",
    data,
  });
};

export const deleteRepresentative = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/representative/delete?id=${id}`,
  });
};
