import { create } from "zustand";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
} from "../apis/product";

const productStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllProduct: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllProduct();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  getProductById: async (id: string) => {
    set({ error: null, loading: true });
    try {
      const response = await getProductById(id);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  createProduct: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await createProduct(data);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "API Error",
      });
    }
  },

  deleteProduct: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteProduct(id);
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

export default productStore;
