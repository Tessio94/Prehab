// import { useEffect, useRef } from "react";
import Button from "@/components/shared/Button";
import { GoTriangleDown } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const Main = () => {
  return (
    <section className="relative z-30 h-[calc(100vh-120px)] w-full">
      <div className="xsm:translate-x-0 xsm:left-12 absolute top-1/4 right-4 left-10 z-10 flex flex-col gap-3 sm:left-16 md:left-24 lg:left-48">
        <h1 className="font-oswald mb-3 text-3xl text-stone-50 sm:text-4xl">
          Prehabilitation Therapy Center
        </h1>
        <div>
          <h3 className="font-oswald mb-3 flex items-center gap-3 text-xl text-stone-50 sm:text-2xl">
            <FaLocationDot /> Zadar, Splitska ulica 3
          </h3>
          <h3 className="font-oswald mb-3 flex items-center gap-3 text-xl text-stone-50 sm:text-2xl">
            <FaLocationDot /> Biograd na Moru, Bukovačka 15
          </h3>
        </div>
        <ul className="mb-5 flex list-disc flex-col gap-3 text-lg text-stone-50 sm:text-xl">
          <li>Diplomirani fizioterapeut</li>
          <li>Centar za rehabilitaciju i pripremu</li>
          <li>Procjena posture, dijagnostika i tretman</li>
        </ul>
        <div className="flex flex-col gap-5 sm:w-full sm:flex-row">
          <Button type="red" href="#intro" header="header">
            <span className="text-nowrap">Pročitajte više</span>{" "}
            <GoTriangleDown />
          </Button>
          <Button type="blue" href="#cjenik" header="header">
            <span className="text-nowrap">Pogledaj cjenik</span>{" "}
            <GoTriangleDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
