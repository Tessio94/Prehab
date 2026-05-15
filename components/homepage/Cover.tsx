"use client";

import Image from "next/image";
import { useState } from "react";

const Cover = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative z-10 h-screen max-h-[1080px] w-full overflow-x-clip">
      {/* Blurred placeholder */}
      <div className="absolute inset-0 z-20 bg-[linear-gradient(to_right,_#000_25%,_#121a29c5_40%,_transparent_55%,_transparent_80%,_#121a29c5_90%,_#000_100%)] shadow-2xl"></div>
      <Image
        src="/images/Nikola/prehab_nikola_low.webp"
        alt="Nikola background"
        fill
        priority
        quality={30}
        sizes="100vw"
        className="left-30! scale-105 object-cover blur-xl"
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
    </div>
  );
};

export default Cover;
