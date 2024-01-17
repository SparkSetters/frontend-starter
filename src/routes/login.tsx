import { FileRoute } from "@tanstack/react-router";
export const Route = new FileRoute("/login").createRoute({
  component: Login,
  beforeLoad: () => {},
});
function Login() {
  return <a href="http://localhost:3005/api/auth">Log In</a>;
}
