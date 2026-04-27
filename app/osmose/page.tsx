import type { Metadata } from "next";
import Image from "next/image";

import { company } from "@/data/site-content";

export const metadata: Metadata = {
  title: "OSMOSE",
  description: company.name,
};

export default function OsmosePage() {
  return (
    <div className="page-osmose page-osmose--blank">
      <div className="page-osmose__logo-wrap">
        <Image
          alt="OSMOSE Conseils & Services"
          className="page-osmose__logo"
          height={960}
          priority
          src="/images/osmose-logo.jpg"
          width={720}
        />
      </div>
    </div>
  );
}
