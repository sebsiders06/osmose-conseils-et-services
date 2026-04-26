import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

export default function ConsultingPage() {
  return (
    <div className="page-consulting">
      <div className="page-consulting__banner" aria-hidden="true" />
      <h1 className="page-enjeux__visually-hidden">Consulting</h1>
    </div>
  );
}
