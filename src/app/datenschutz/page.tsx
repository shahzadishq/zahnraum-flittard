import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Zahnraum Flittard",
};

export default function Page() {
  return <LegalPage title="Datenschutzerklärung" sections={datenschutz} />;
}
