import { FileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = new FileRoute("/_app").createRoute({
  component: AppLayout,
  beforeLoad: async () => {
    const retrievedValue = localStorage.getItem("fesapp"); // change me
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
