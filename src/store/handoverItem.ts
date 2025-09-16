import { create } from "zustand";
import {
  createHandoverItem,
  deleteHandoverItem,
  getAllHandoverItem,
  getByHandoverRecordId,
  getHandoverItemById,
} from "../apis/handoverItem";

const handoverItemStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllHandoverItem: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllHandoverItem();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getHandoverItemById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await getHandoverItemById(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getByHandoverRecordId: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await getByHandoverRecordId(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  createHandoverItem: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await createHandoverItem(data);
      set((state) => ({
        data: [...state.data, response.data],
        loading: false,
        error: null,
      }));
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  deleteHandoverItem: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteHandoverItem(id);
      set((state) => ({
        data: state.data.filter((item) => item.id !== id),
        loading: false,
        error: null,
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

export default handoverItemStore;
