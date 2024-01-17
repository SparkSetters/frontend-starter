import { useContext } from 'react';
import { AuthContext } from '@/lib/AuthContextProvider.tsx';

export const useAuthContext = () => {
  return useContext(AuthContext);
};
