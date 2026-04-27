import type { Metadata } from "next";

import { company } from "@/data/site-content";

export const metadata: Metadata = {
  title: "OSMOSE",
  description: company.name,
};

export default function OsmosePage() {
  return <div className="page-osmose page-osmose--blank" />;
}
