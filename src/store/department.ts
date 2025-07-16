import { create } from "zustand";
import {
  createDepartment,
  deleteDepartment,
  getAllDepartment,
  getDepartmentById,
} from "../apis/deparment";

type DepartmentItem = {
  id: string;
  name: string;
  address?: string;
};

type DepartmentStore = {
  data: DepartmentItem[] | null;
  loading: boolean;
  error: string | null;
  getAllDepartment: () => Promise<any>;
  getDepartmentById: (id: string) => Promise<any>;
  createDepartment: (data: any) => Promise<any>;
  deleteDepartment: (id: string) => Promise<any>;
};

const departmentStore = create<DepartmentStore>((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllDepartment: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllDepartment();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getDepartmentById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await getDepartmentById(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  createDepartment: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await createDepartment(data);
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

  deleteDepartment: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteDepartment(id);
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

export default departmentStore;
