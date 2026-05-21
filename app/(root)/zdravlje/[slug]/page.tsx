import ConnectedArticles from "@/components/article/ConnectedArticles";
import Content from "@/components/article/Content";
import Cover from "@/components/article/Cover";
import { Metadata } from "next";

const Page = () => {
  return (
    <>
      <Cover />
      <Content />
      <ConnectedArticles />
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "Zdravlje - Skolioza Kamp | Prehab Fizioterapija Zadar i Biograd",
  description:
    "Skolioza kamp u Biogradu na Moru 2025. 7-dnevni program koji obuhvaća testove skolioze, fleksibilnosti, mobilnosti, izdržljivosti i još mnogo toga.",
  openGraph: {
    title: "Prehab Zadar | Zdravlje - Skolioza Kamp",
    description:
      "Skolioza kamp u Biogradu na Moru 2025. 7-dnevni program koji obuhvaća testove skolioze, fleksibilnosti, mobilnosti, izdržljivosti i još mnogo toga.",

    url: "https://prehabilitationtherapycenter.hr/o-nama",
    siteName: "Prehab Zadar",
    images: [
      {
        url: "https://prehabilitationtherapycenter.hr/images/Nikola/prehab.jpg",
        width: 1920,
        height: 1080,
        alt: "Prehab fizioterapija Zadar i Biograd",
      },
    ],
    type: "website",
    locale: "hr_HR",
  },
};
