import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast.ts";
import { useAuthContext } from "@/hooks/useAuthContext.tsx";
export const Route = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  const { toast } = useToast();
  const auth = useAuthContext();

  const onLoginClick = () => {
    if (!auth?.isLoggedIn) {
      toast({
        title: "Authorized Users Only",
        description: "Log In First",
      });
    }
  };

  return (
    <>
      <div className="p-2 flex gap-4 text-lg">
        <Link
          to={"/"}
          activeProps={{
            className: "font-bold",
          }}
        >
          /home
        </Link>
        <Link
          to={"/login"}
          activeProps={{
            className: "font-bold",
          }}
        >
          /login
        </Link>
        <Link
          to={"/user/profile"}
          activeProps={{
            className: "font-bold",
          }}
          onClick={() => onLoginClick()}
        >
          /user/profile
        </Link>
      </div>
      <hr />
      <Outlet />
      <Toaster />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
