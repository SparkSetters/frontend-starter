import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/_app/user/profile").createRoute({
  component: ProfileComponent,
});
function ProfileComponent() {
  return <div>User Profile Protected Page</div>;
}
