import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage.tsx";
// import { useMutation } from '@tanstack/react-query';
// import { loginQuery } from '@/queries/Mutations.tsx';
// import { UnhashedCredentialParams } from '@/types/interfaces.ts';
// import { jwtDecode } from 'jwt-decode';

// note: handle everything better
function useAuth() {
  const { setItem, getItem, removeItem } = useLocalStorage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function logIn(username: string) {
    void setItem("zavinci-active-user", username);
    setIsLoggedIn(true);
  }
  function getActiveUser() {
    if (typeof window !== "undefined") {
      return getItem("zavinci-active-user");
    }
    return null;
  }

  function deleteSession() {
    return removeItem("zavinci-active-user");
  }

  // const loginMutation = useMutation({
  //   mutationFn: (credentials: UnhashedCredentialParams) => {
  //     return loginQuery(credentials);
  //   },
  //   onSuccess: async (data) => {
  //     if (data.token) {
  //       const decodedToken = jwtDecode(data.token);
  //       console.log(decodedToken);
  //       logIn(data.token);
  //       setIsLoggedIn(true);
  //     }
  //   },
  //   onError: (error) => console.error('Error:', error),
  // });

  useEffect(() => {
    const token = getActiveUser();
    setIsLoggedIn(!!token);
  }, []);

  const logOut = () => {
    deleteSession();
    setIsLoggedIn(false);
  };

  return {
    // loginUser: loginMutation.mutate,
    isLoggedIn,
    logOut,
    logIn,
    getActiveUser,
  };
}

export default useAuth;
