import { FileRoute } from "@tanstack/react-router";
export const Route = new FileRoute('/').createRoute({
  component: Home,
  beforeLoad: () => {},
});
function Home() {
  return <div>Home</div>;
}
