import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertises",
  description: "Decouvrez les domaines d'expertise du cabinet : strategie, transformation, leadership, performance commerciale et transmission.",
};

export default function ExpertisesPage() {
  return <div className="page-expertises" aria-label="Expertises" />;
}
