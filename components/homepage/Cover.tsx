"use client";

import Image from "next/image";
import { useState } from "react";

const Cover = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Blurred placeholder */}
      <div className="from-black_preh absolute inset-0 z-20 overflow-x-clip bg-linear-to-r from-25% via-[#121a29c5] via-40% to-transparent to-55% shadow-2xl"></div>
      <Image
        src="/images/Nikola/prehab_nikola_low.webp"
        alt="Nikola background"
        fill
        priority
        quality={30}
        sizes="100vw"
        className="scale-105 object-cover blur-xl"
      />

      {/* Main image */}
      <Image
        src="/images/Nikola/prehab_nikola.jpg"
        alt="Nikola background high quality"
        fill
        priority
        quality={100}
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        className={`left-30! object-cover object-right transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
};

export default Cover;
