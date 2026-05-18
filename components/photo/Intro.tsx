import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";

// bg-theme1/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26

const Intro = () => {
  return (
    <section className="bg-slate-100 bg-[url(/images/logo/background.png)] bg-cover bg-no-repeat">
      <div className="flex w-full flex-col px-6 pt-16 md:px-10 lg:px-16 xl:flex-row">
        <div className="flex flex-col items-start gap-6 p-10 max-md:p-0 sm:pb-16 xl:w-[50%] xl:pb-26">
          <h1 className="text-red_preh text-semibold font-oswald text-4xl">
            Fotogalerija
          </h1>
          <h2 className="after:bg-red_preh font-oswald relative text-7xl font-bold after:absolute after:top-[110%] after:left-0 after:h-2 after:w-20 after:rounded-2xl xl:text-6xl 2xl:text-7xl">
            Trenuci posvećenosti i{" "}
            <span className="text-red_preh">napretka</span>
          </h2>
          <p className="text-semibold font-inter mt-5 text-3xl text-black">
            Zavirite u naš prostor, opremu i svakodnevne aktivnosti kroz
            fotografije koje prikazuju predanost, stručnost i rezultate.
          </p>
          <button className="font-oswald border-red_preh mt-3 flex flex-row items-center gap-2 rounded-xl border bg-black px-5 py-1 text-2xl font-semibold text-white">
            <span>Više o meni</span>
            <GoTriangleDown />
          </button>
        </div>
        <div className="max-lg:p-10 max-lg:pb-0 max-sm:p-6 max-sm:pb-0 xl:w-[50%]">
          <Image
            src="/images/photo.png"
            className="block"
            width={941}
            height={821}
            alt="Fizioterapeut Nikola Lukić"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
