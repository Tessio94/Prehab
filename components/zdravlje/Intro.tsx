import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";

// bg-theme1/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26

const Intro = () => {
  return (
    <section className="bg-slate-100">
      <div className="flex w-full flex-col pt-16 pr-0! pl-6 md:px-10 lg:px-16 xl:flex-row">
        <div className="flex flex-col items-start gap-6 p-10 max-md:p-0 max-md:py-10 sm:pb-16 xl:w-[50%] xl:py-26">
          <h1 className="text-red_preh text-semibold font-oswald text-4xl max-[400px]:text-4xl">
            Naš blog
          </h1>
          <h2 className="after:bg-red_preh font-oswald relative text-6xl font-bold after:absolute after:top-[110%] after:left-0 after:h-2 after:w-20 after:rounded-2xl max-[400px]:text-5xl sm:text-7xl xl:text-6xl 2xl:text-7xl">
            Savjeti, znanje i inspiracija za{" "}
            <span className="text-red_preh">zdraviji život.</span>
          </h2>
          <p className="text-semibold font-inter mt-5 text-3xl text-black max-[400px]:text-2xl">
            Istražite stučne članke, praktične savjete i najnovije informacije
            iz svijeta fizioterapije, rehabilitacije i zdravog načina života
          </p>
        </div>
        <div className="h-full min-h-160 w-[50%] overflow-hidden rounded-l-full bg-[url(/images/zadar/slika1.jpg)] bg-cover bg-no-repeat max-xl:hidden"></div>
      </div>
    </section>
  );
};

export default Intro;
