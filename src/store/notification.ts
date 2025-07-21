import {
  deleteNotification,
  getAllNotifications,
  getNotificationById,
  getNotificationByUser,
  updateStatus,
} from "../apis/notification";
import { create } from "zustand";

const notificationStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllNotification: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllNotifications();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getNotificationById: async (notificationId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await getNotificationById(notificationId);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getNotificationByUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getNotificationByUser();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  updateStatus: async (notificationId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await updateStatus(notificationId);
      set((state) => ({
        loading: false,
        error: null,
        data: state.data.map((notification) =>
          notification.id === notificationId
            ? { ...notification }
            : notification
        ),
      }));
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  deleteNotification: async (notificationId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteNotification(notificationId);
      set((state) => ({
        loading: false,
        error: null,
        data: state.data.filter(
          (notification) => notification.id !== notificationId
        ),
      }));
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },
}));

export default notificationStore;
