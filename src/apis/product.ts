import { axiosConfig } from "../utils/axiosConfig";

export const getAllProduct = async () => {
  return await axiosConfig({
    method: "get",
    url: "/product",
  });
};

export const getProductById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/product/getById?id=${id}`,
  });
};

export const createProduct = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/product/create",
    data,
  });
};

export const deleteProduct = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/product/delete?id=${id}`,
  });
};
