"use client";

import Image from "next/image";
import { useState } from "react";

const Cover = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0">
      <div className="from-black_preh absolute top-0 left-0 z-20 h-screen w-[70%] overflow-x-clip bg-linear-to-r shadow-2xl"></div>
      {/* Blurred placeholder */}
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
        className={`object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Cover;
