import { FileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = new FileRoute('/_app').createRoute({
  component: AppLayout,
  beforeLoad: async () => {
    // THere's only one boolean check for log-in status. Store jwt in httponly cookie, make sure api is secure
    const retrievedValue = localStorage.getItem("app"); // change me
    if (!retrievedValue) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function AppLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
