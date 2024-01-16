import { FileRoute } from "@tanstack/react-router";
export const Route = new FileRoute('/login').createRoute({
  component: Login,
  beforeLoad: () => {},
});
function Login() {
  return <div>Log In</div>;
}
