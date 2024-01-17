import { FileRoute, useSearch } from "@tanstack/react-router";
import { z } from "zod";

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
  const search = useSearch({ from: Route.fullPath });
  return <div>{search.code}</div>;
}
