import { axiosConfig } from "../utils/axiosConfig";

export const getAllNotifications = async () => {
  return await axiosConfig({
    method: "get",
    url: "/notification",
  });
};

export const getNotificationById = async (id: string) => {
  return await axiosConfig({
    method: "get",
    url: `/notification/${id}`,
  });
};

export const getNotificationByUser = async () => {
  return await axiosConfig({
    method: "get",
    url: "/notification/getByUser",
  });
};

export const updateStatus = async (id: string) => {
  return await axiosConfig({
    method: "put",
    url: `/notification/updateStatus/${id}`,
  });
};

export const deleteNotification = async (id: string) => {
  return await axiosConfig({
    method: "delete",
    url: `/notification/delete/${id}`,
  });
};
