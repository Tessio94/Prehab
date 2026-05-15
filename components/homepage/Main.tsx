// import { useEffect, useRef } from "react";
import Button from "@/components/shared/Button";
import { GoTriangleDown } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const Main = () => {
  return (
    <section className="absolute top-30 z-100 h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] w-full pt-16 md:px-10 lg:px-16">
      <div className="z-10 flex h-[60%] max-h-[600px] min-h-fit flex-col justify-between gap-5 p-10">
        <h1 className="font-oswald text-red_preh text-2xl uppercase sm:text-4xl">
          Prehabilitation Therapy Center
        </h1>
        <h3 className="font-oswald flex flex-col items-start text-8xl font-bold text-slate-100">
          <span>Put prema</span>{" "}
          <span className="text-red_preh">zdravlju je</span>{" "}
          <span>naš prioritet.</span>
        </h3>
        <p className="font-inter text-2xl text-slate-100">
          Profesionalna fizioterapija, rehabilitacija,
          <br /> treninzi i edukacija na jednom mjestu.
        </p>
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
