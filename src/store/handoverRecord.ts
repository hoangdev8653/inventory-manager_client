import { create } from "zustand";
import {
  createHandoverRecord,
  deleteHandoverRecord,
  getAllHandoverRecord,
  getHandoverRecordById,
  signHandoverRecord,
  getHandoverRecordByUser,
  getHandoverRecordByUserNotSign,
  getRecordByRole,
  signRepresentativeA,
  signRepresentativeB,
  signUserB,
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

  getHandoverRecordByUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getHandoverRecordByUser();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error?.response?.data?.message || "API Error",
      });
    }
  },

  getHandoverRecordByUserNotSign: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getHandoverRecordByUserNotSign();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error?.response?.data?.message || "API Error",
      });
    }
  },

  getRecordByRole: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getRecordByRole();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  signUserB: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await signUserB(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error?.response?.data?.message || "API Error",
      });
    }
  },

  signRepresentativeA: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await signRepresentativeA(id);
      set({ loading: false, error: false, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  signRepresentativeB: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await signRepresentativeB(id);
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

  signHandoverRecord: async (recordId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await signHandoverRecord(recordId);
      set({ loading: false, error: null, data: response.data });
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
