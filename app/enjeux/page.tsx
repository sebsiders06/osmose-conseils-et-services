import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enjeux",
  description: "Osmose Conseils & Services.",
};

export default function EnjeuxPage() {
  return (
    <div className="page-enjeux">
      <h1 className="page-enjeux__visually-hidden">Enjeux</h1>
    </div>
  );
}
