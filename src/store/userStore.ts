import { create } from "zustand";
import {
  getAllUser,
  deleteUser,
  login,
  register,
  updateRole,
} from "../apis/auth";
import { setLocalStorage } from "../utils/localStorage";

const userStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  getAllUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await getAllUser();
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({ loading: false, error: error.response.message || "API Error" });
    }
  },

  register: async (data: any) => {
    console.log(data);

    set({ loading: true, error: null });
    try {
      const response = await register(data);
      set({ loading: false, error: null, data: response.data });
      return response;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Register Failed",
        loading: false,
      });
    }
  },

  login: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await login(data);
      set({ loading: false, error: null, data: response.data });
      setLocalStorage("accessToken", response.data.accessToken);
      setLocalStorage("refreshToken", response.data.refreshToken);
      const { password, ...userContent } = response.data.content;
      setLocalStorage("user", userContent);

      return response;
    } catch (error: any) {
      set({ loading: false, error: error.response.message || "Login Failed" });
    }
  },

  updateRole: async (data: any) => {
    set({ loading: true, error: null });
    try {
      const response = await updateRole(data);
      set({ loading: false, error: null, data: response.data });
      return response.data;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response.data?.message || "Update Role Failed",
      });
    }
  },

  deleteUser: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteUser(id);
      set((state: any) => ({
        data: state.data?.filter((user: any) => {
          return user._id !== id;
        }),
        loading: false,
        error: null,
      }));
      return response;
    } catch (error: any) {
      set({
        loading: false,
        error: error.response?.data?.message || "Delete User Failed",
      });
    }
  },
}));

export default userStore;
