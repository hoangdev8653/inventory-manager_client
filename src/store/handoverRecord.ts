import { create } from "zustand";
import {
  createHandoverRecord,
  deleteHandoverRecord,
  getAllHandoverRecord,
  getHandoverRecordById,
} from "../apis/handoverRecord";

const handoverRecordStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllHandoverRecord: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllHandoverRecord();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getHandoverRecordById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await getHandoverRecordById(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  createHandoverRecord: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await createHandoverRecord(data);
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

  deleteHandoverRecord: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteHandoverRecord(id);
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

export default handoverRecordStore;
