import Link from "next/link";
import { BiHeart, BiTargetLock, BiUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

const Steps = () => {
  return (
    <div className="bg-white py-10 md:px-10 lg:px-16">
      <div className="flex flex-col items-center justify-between gap-15 px-6 xl:flex-row 2xl:p-10">
        <div className="flex flex-col items-center xl:max-w-[280px] xl:items-start">
          <p className="font-oswald text-red_preh text-xl font-semibold uppercase">
            Naš pristup
          </p>
          <p className="font-oswald relative text-4xl font-bold text-black">
            Put do vašeg oporavka
          </p>
          <p className="font-inter mt-4 text-xl text-black">
            Sustavan i provjeren proces koji osigurava siguran povratak pokretu
            i aktivnostima koje volite..
          </p>
        </div>
        <div className="flex flex-row items-start overflow-hidden max-lg:flex-wrap max-lg:gap-y-10 max-sm:gap-y-0">
          <div className="flex flex-col items-center gap-5 border-r border-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <div className="font-oswald bg-red_preh after:bg-red_preh_t relative z-20 flex h-20 w-20 items-center justify-center rounded-full p-3 text-6xl font-semibold text-white after:absolute after:top-1/2 after:right-0.5 after:h-2 after:w-1000 after:translate-x-full">
              1
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Procjena
            </p>
            <p className="text-center text-2xl text-black">
              Detaljna analiza vašeg stanja, potreba i ciljeva kako bismo
              razumjeli vaš problem.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 overflow-hidden border-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10 lg:border-r">
            <div className="font-oswald bg-red_preh relative z-20 flex h-20 w-20 items-center justify-center rounded-full p-3 text-6xl font-semibold text-white">
              2
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Plan terapije
            </p>
            <p className="text-center text-2xl text-black">
              Kreiramo personaliziran plan terapije prilagošen vašem tijelu,
              životnon stilu i ciljevima.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 border-r border-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <div className="font-oswald bg-red_preh relative z-20 flex h-20 w-20 items-center justify-center rounded-full p-3 text-6xl font-semibold text-white">
              3
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Provedba
            </p>
            <p className="text-center text-2xl text-black">
              Kroz stručne tretmane i vježbe radimo na obnovi pokretljivosti,
              snage i funkcionalnosti.
            </p>
          </div>
          <div className="z-30 flex flex-col items-center gap-5 overflow-hidden bg-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <div className="font-oswald bg-red_preh after:bg-red_preh_t relative z-30 flex h-20 w-20 items-center justify-center rounded-full p-3 text-6xl font-semibold text-white after:absolute after:top-1/2 after:right-0.5 after:-z-10 after:h-2 after:w-100">
              4
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Praćenje i napredak
            </p>
            <p className="text-center text-2xl text-black">
              Pratimo vaš napredak i prilagođavamo plan kako bismo osigurali
              najbolje moguće rezultate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
