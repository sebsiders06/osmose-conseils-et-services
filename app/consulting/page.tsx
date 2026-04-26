import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting — accompagnement conseil.",
};

const consultingIntroCopy =
  "Vous souhaitez optimiser l'organisation, renforcer la cohésion de groupe, améliorer la performance et définir une stratégie pour votre entreprise, notre expertise dans ces différents domaines nous permet de vous accompagner de l'audit à la mise en oeuvre opérationnelle de solutions concrètes et performantes.";

export default function ConsultingPage() {
  return (
    <div className="page-consulting">
      <h1 className="page-enjeux__visually-hidden">Consulting</h1>
      <div className="page-consulting__banner" aria-hidden="true" />
      <div className="page-consulting__intro-box">
        <p className="page-consulting__intro-text">{consultingIntroCopy}</p>
      </div>
    </div>
  );
}
