import { FileRoute, useSearch } from "@tanstack/react-router";
import { z } from "zod";
import { useAuthContext } from "@/hooks/useAuthContext.tsx";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
export const Route = new FileRoute("/callback").createRoute({
  validateSearch: z.object({
    code: z.string(),
  }),
  loaderDeps: ({ search: { code } }) => ({ code }),
  loader: async ({ deps: { code }, navigate }) => {
    if (code) {
      return { accessToken: code };
    } else {
      navigate({ to: "/" });
    }
  },
  component: Callback,
});

function Callback() {
  const navigate = useNavigate({
    from: "http://localhost:3005/api/auth/login-page",
  });
  const auth = useAuthContext();
  const search = useSearch({ from: Route.fullPath });
  useEffect(() => {
    if (search.code.length > 0) {
      auth?.logIn(search.code);
      void navigate({ to: "/user/profile" });
    }
  }, [auth, navigate, search.code]);
  return <div>Loading</div>;
}
