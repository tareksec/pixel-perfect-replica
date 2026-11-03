import { createFileRoute } from "@tanstack/react-router";
import { StubScreen } from "@/components/StubScreen";

export const Route = createFileRoute("/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals · Business Command" },
      { name: "description", content: "Approvals for your business — owner preview." },
      { property: "og:title", content: "Approvals · Business Command" },
      { property: "og:description", content: "Approvals for your business — owner preview." },
    ],
  }),
  component: () => <StubScreen titleKey="approvals" />,
});
