import { createFileRoute } from "@tanstack/react-router";
import { StubScreen } from "@/components/StubScreen";

export const Route = createFileRoute("/supply-chain")({
  head: () => ({
    meta: [
      { title: "Supply Chain · Business Command" },
      { name: "description", content: "Supply Chain for your business — owner preview." },
      { property: "og:title", content: "Supply Chain · Business Command" },
      { property: "og:description", content: "Supply Chain for your business — owner preview." },
    ],
  }),
  component: () => <StubScreen titleKey="supply" />,
});
