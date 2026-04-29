import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Osmose Conseils & Services.",
};

export default function ArticlesPage() {
  return <div className="page-articles" />;
}
