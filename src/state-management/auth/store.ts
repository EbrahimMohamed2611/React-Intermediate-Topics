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

export default useAuthStore;
