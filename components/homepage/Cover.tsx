"use client";

import Image from "next/image";

const Cover = ({
  setLoaded,
}: {
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative z-10 w-full overflow-x-clip">
      <div className="from-red_preh absolute inset-0 -z-10 bg-linear-to-b from-50% to-transparent"></div>
      {/* <Image
        src="/images/Nikola/prehab_nikola_low.webp"
        alt="Nikola background"
        fill
        priority
        quality={30}
        sizes="100vw"
        className="left-30! scale-105 object-cover blur-xl"
      /> */}

      {/* Main image */}
      {/* <Image
        src="/images/Nikola/cover4.png"
        alt="Nikola background high quality"
        fill
        priority
        quality={100}
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover object-right transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      /> */}

      <Image
        src="/images/Nikola/cover4.png"
        alt="Nikola background high quality"
        width={1920}
        height={1080}
        className="hidden lg:block"
        onLoad={() => setLoaded(true)}
      />
      <Image
        src="/images/group82.png"
        alt="Nikola background high quality"
        width={1920}
        height={1080}
        className="hidden max-[600px]:hidden! max-lg:block"
        onLoad={() => setLoaded(true)}
      />
      <Image
        src="/images/group8_small.png"
        alt="Nikola background high quality"
        width={1920}
        height={1080}
        className="hidden max-[600px]:block"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Cover;
