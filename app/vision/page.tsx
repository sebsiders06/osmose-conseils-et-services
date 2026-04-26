import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision",
  description: "Osmose Conseils & Services.",
};

export default function VisionPage() {
  return (
    <div className="page-vision">
      <h1 className="page-vision__visually-hidden">Vision</h1>
    </div>
  );
}
