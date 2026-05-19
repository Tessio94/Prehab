// import { useEffect, useRef } from "react";
import Button from "@/components/shared/Button";
import { GoTriangleDown } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const Main = () => {
  return (
    <section className="absolute top-30 z-20 h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] w-full pt-16 max-[1350px]:top-20 max-[1200px]:top-15 max-[1024px]:top-40 max-[850px]:top-30 max-[750px]:top-20 max-[650px]:top-16 max-[600px]:top-50 max-[500px]:top-30 max-[450px]:top-15 max-[390px]:top-6 max-[370px]:top-4 md:px-10 lg:px-16">
      <div className="z-10 flex min-h-fit flex-col justify-between gap-6 px-6 py-10 max-[1650px]:gap-4 max-[1400px]:gap-3 max-[1024px]:gap-5 max-[850px]:gap-3.5 max-[600px]:gap-3 max-[420px]:gap-2.5 sm:px-10 sm:py-10">
        <h1 className="font-oswald text-red_preh text-4xl uppercase max-[1650px]:text-3xl max-[1200px]:text-2xl max-[1024px]:text-3xl max-[420px]:text-2xl max-[370px]:text-[20px]">
          Prehabilitation Therapy Center
        </h1>
        <h3 className="font-oswald flex flex-col items-start text-8xl font-bold text-slate-100 max-[1650px]:text-7xl max-[1400px]:text-6xl max-[1200px]:text-5xl max-[1024px]:text-7xl max-[850px]:text-6xl max-[420px]:text-5xl">
          <span>Put prema</span>{" "}
          <span className="text-red_preh">zdravlju je</span>{" "}
          <span>naš prioritet.</span>
        </h3>
        <p className="font-inter text-2xl text-slate-100 max-[1400px]:text-[20px] max-[1200px]:text-[18px] max-[1024px]:text-2xl max-[850px]:text-[18px]">
          Profesionalna fizioterapija, rehabilitacija,
          <br /> treninzi i edukacija na jednom mjestu.
        </p>
        <div className="flex flex-col gap-5 max-[420px]:mt-1.5 max-[420px]:gap-3 min-[500px]:w-full min-[500px]:flex-row">
          <Button type="red" href="#intro">
            <span className="text-nowrap">Pročitajte više</span>{" "}
            <GoTriangleDown />
          </Button>
          <Button type="black" href="#cjenik">
            <span className="text-nowrap">Pogledaj cjenik</span>{" "}
            <GoTriangleDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
