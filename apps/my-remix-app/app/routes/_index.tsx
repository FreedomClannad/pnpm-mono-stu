import type { MetaFunction } from "@remix-run/node";
import Button from "shared-ui/src/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Button></Button>
  );
}
