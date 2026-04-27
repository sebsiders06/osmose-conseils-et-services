import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Osmose Conseils & Services.",
};

export default function HomePage() {
  return <div className="page-home page-home--blank" />;
}
