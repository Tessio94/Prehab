"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import metadata from "@/data/metaData.js";
import Main from "@/components/homepage/Main";
import Quote from "@/components/homepage/Quote";
import HomeProfile from "@/components/homepage/HomeProfile";
import Intro from "@/components/homepage/Intro";
import Usluge from "@/components/homepage/Usluge";
import Cjenik from "@/components/homepage/Cjenik";
import Trening from "@/components/homepage/Trening";
import Suradnje from "@/components/homepage/Suradnje";
import { FaArrowUp } from "react-icons/fa";
import Cover from "@/components/homepage/Cover";

const Page = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const location = usePathname();

  //   const meta = metadata[location.pathname];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>{meta.title || "Prehab Zadar"}</title>
        <meta
          property="og:image"
          content="https://prehabilitationtherapycenter.hr/images/Nikola/prehab nikola.jpg"
        ></meta>
        <meta
          name="description"
          content={
            meta.description ||
            "Dobrodošli u fizioterapeutsku kliniku Prehab Zadar."
          }
        />
        <script type="application/ld+json">
          {`
							{
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Prehabilitation Therapy Center Zadar",
							"alternateName": "Prehab Zadar",
							"url": "https://prehabilitationtherapycenter.hr/",
							"logo": "https://prehabilitationtherapycenter.hr/images/logo/ikona.png",
							"image": "https://prehabilitationtherapycenter.hr/images/Nikola/prehab nikola.jpg"
							}
						`}
        </script>
      </Helmet> */}

      {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className="bg-red_preh/35 fixed right-2 bottom-5 z-50 flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-xl p-3"
        >
          <FaArrowUp className="text-red_preh text-5xl" />
        </div>
      )}
      <Cover />
      <Main />
      <HomeProfile />
      <Intro />
      <Quote />
      <Usluge />
      <Cjenik />
      <Trening />
      <Suradnje />
    </>
  );
};

export default Page;
