import { create } from "zustand";
import {
  createRepresentative,
  deleteRepresentative,
  getAllRepresentative,
  getRepresentativeById,
} from "../apis/representative";

const representative = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllRepresentative: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllRepresentative();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getRepresentativeById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await getRepresentativeById(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  createRepresentative: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await createRepresentative(data);
      set((state: any) => ({
        data: [...state.data, response.data],
        loading: false,
        error: null,
      }));
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  deleteRepresentative: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteRepresentative(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },
}));

export default representative;
