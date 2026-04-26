import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

export default function ConsultingPage() {
  return (
    <div className="page-consulting">
      <h1 className="page-enjeux__visually-hidden">Consulting</h1>
    </div>
  );
}
