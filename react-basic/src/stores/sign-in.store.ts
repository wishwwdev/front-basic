import { create } from "zustand";

interface SignInStore {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useStore = create<SignInStore>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set((state) => ({ ...state, email })),
  setPassword: (password) => set((state) => ({...state, password}))
}));

// state -> {email, password, setEmail}
// { ...state } -> { email, password, setEmail }
// { ...state, email: 'email' } -> { email: 'email', password, setEmail }  원래 있던 이메일 값을 새로 넣는 email 값으로 갈아끼운다는 뜻