import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision",
  description: "Vision — performance et retour sur investissement.",
};

export default function VisionPage() {
  return (
    <div className="page-vision">
      <div className="page-vision__intro">
        <h1 className="page-vision__title">VISION</h1>
        <p className="page-vision__tagline">Performance et retour sur investissement</p>
      </div>
    </div>
  );
}
