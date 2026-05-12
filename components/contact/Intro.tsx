import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";

// bg-theme1/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26

const Intro = () => {
  return (
    <section className="bg-slate-100">
      <div className="flex w-full flex-col pr-0! md:px-10 lg:px-16 xl:flex-row">
        <div className="flex flex-col items-start gap-6 p-6 sm:p-10 sm:py-16 xl:w-[50%] xl:py-26">
          <h1 className="text-red_preh text-semibold font-oswald text-4xl max-[400px]:text-3xl">
            Kontakt
          </h1>
          <h2 className="after:bg-red_preh font-oswald relative text-6xl font-bold after:absolute after:top-[110%] after:left-0 after:h-2 after:w-20 after:rounded-2xl max-[400px]:text-5xl sm:text-7xl xl:text-6xl 2xl:text-7xl">
            Tu smo za sva vaša pitanja.
          </h2>
          <p className="text-semibold font-inter mt-5 text-3xl text-black">
            Imate pitanja, želite dogovoriti termin ili saznati više o našim
            uslugama? Kontaktirajte nas putem mobitela, e-maila ili ispunite
            obrazac - javljamo se u najkraćem mogućem roku
          </p>
        </div>
        <div className="h-full min-h-160 w-[50%] overflow-hidden rounded-l-full bg-[url(/images/zadar/slika1.jpg)] bg-cover bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Intro;
