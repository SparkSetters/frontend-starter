import { createContext } from "react";
import useAuth from "@/hooks/useAuth.tsx";
// import { UnhashedCredentialParams } from '@/types/interfaces.ts';
// import { UseMutateFunction } from '@tanstack/react-query';

interface AuthContextType {
  // isCreatedSuccess: boolean;
  // createUserAccount: UseMutateFunction<
  //   any,
  //   Error,
  //   UnhashedCredentialParams,
  //   unknown
  // >;
  logIn: (username: string) => void;
  isLoggedIn: boolean;
  logOut: () => void;
  getActiveUser: () => string | null | undefined;
}

export const AuthContext = createContext<AuthContextType | null>(null);
export const AuthContextProvider = ({ children }: any) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
