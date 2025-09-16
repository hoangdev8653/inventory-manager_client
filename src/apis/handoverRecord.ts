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

export const getHandoverRecordByUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "/handoverRecord/getHandoverRecordByUser",
  });
};

export const getHandoverRecordByUserNotSign = async () => {
  return await axiosConfig({
    method: "get",
    url: "/handoverRecord/getHandoverRecordByUserNotSign",
  });
};

export const createHandoverRecord = async (data: any) => {
  return await axiosConfig({
    method: "post",
    url: "/handoverRecord/create",
    data,
  });
};

export const signHandoverRecord = async (recordId: string) => {
  return await axiosConfig({
    method: "put",
    url: `/handoverRecord/signHandoverRecord?recordId=${recordId}`,
  });
};

export const getRecordByRole = async () => {
  return await axiosConfig({
    method: "get",
    url: "/handoverRecord/getRecordByRole",
  });
};

export const signUserB = async (id: string) => {
  return await axiosConfig({
    method: "patch",
    url: `/handoverRecord/signUserB?id=${id}`,
  });
};

export const signRepresentativeA = async (id: string) => {
  return await axiosConfig({
    method: "patch",
    url: `handoverRecord/signRepresentativeA?id=${id}`,
  });
};

export const signRepresentativeB = async (id: string) => {
  return await axiosConfig({
    method: "patch",
    url: `handoverRecord/signRepresentativeB?id=${id}`,
  });
};

export const deleteHandoverRecord = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/handoverRecord/delete?id=${id}`,
  });
};
