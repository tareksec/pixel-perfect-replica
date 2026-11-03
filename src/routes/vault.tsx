import { createFileRoute } from "@tanstack/react-router";
import { StubScreen } from "@/components/StubScreen";

export const Route = createFileRoute("/vault")({
  head: () => ({
    meta: [
      { title: "Vault · Business Command" },
      { name: "description", content: "Vault for your business — owner preview." },
      { property: "og:title", content: "Vault · Business Command" },
      { property: "og:description", content: "Vault for your business — owner preview." },
    ],
  }),
  component: () => <StubScreen titleKey="vault" />,
});
