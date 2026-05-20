import LandingPage from "@/components/homepage/LandingPage";
import { Metadata } from "next";

const Page = () => {
  return <LandingPage />;
};

export default Page;

export const metadata: Metadata = {
  title: "Prehab Fizioterapija Zadar | Biograd",
  description:
    "Prehab je specijalizirana klinika za fizioterapiju i rehabilitaciju u Zadru i Biogradu koju vodi Nikola Lukić, diplomirani fizioterapeut. Nudimo dijagnostiku problema, korekciju posture, terapiju skolioze, masažu, elektro stimulaciju, ultrazvučnu terapiju, terapijske vježbe u vodi te individualne programe rehabilitacije.",
  openGraph: {
    title: "Prehab – fizioterapeut i rehabilitacija u Zadru",
    description:
      "Saznajte više o nama, iskustvu i pristupu liječenju boli, pokreta i kroničnih tegoba.",
    url: "https://prehabilitationtherapycenter.hr/",
    images: [
      {
        url: "https://prehabilitationtherapycenter.hr/",
        width: 1920,
        height: 1080,
        alt: "O nama | Prehab fizioterapija Zadar",
      },
    ],
    type: "website",
    locale: "hr_HR",
  },
};
