import { createFileRoute } from "@tanstack/react-router";
import { StubScreen } from "@/components/StubScreen";

export const Route = createFileRoute("/website")({
  head: () => ({
    meta: [
      { title: "Website Control · Business Command" },
      { name: "description", content: "Website Control for your business — owner preview." },
      { property: "og:title", content: "Website Control · Business Command" },
      { property: "og:description", content: "Website Control for your business — owner preview." },
    ],
  }),
  component: () => <StubScreen titleKey="website" />,
});
