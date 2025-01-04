import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface AuthStore {
  userName: string;
  login: (user: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  userName: "",
  login: (username) => set((store) => ({ userName: username })),
  logout: () => set((store) => ({ userName: "" })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Auth Store", useAuthStore);

export default useAuthStore;
