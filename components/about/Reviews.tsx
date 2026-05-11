import Link from "next/link";
import { BiHeart, BiTargetLock, BiUser } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

const Reviews = () => {
  return (
    <div className="bg-slate-300 py-10 md:px-10 lg:px-16">
      <div className="flex flex-col justify-between gap-15 px-6 max-xl:items-center xl:flex-row 2xl:p-10">
        <div className="flex flex-col items-center xl:max-w-[280px] xl:items-start">
          <p className="font-oswald text-red_preh text-xl font-semibold uppercase">
            Zašto odabrati nas
          </p>
          <p className="after:bg-red_preh font-oswald relative text-4xl font-bold text-black after:absolute after:top-[110%] after:left-0 after:h-1.5 after:w-20 after:rounded-2xl">
            Vaše zdravlje je naš prioritet
          </p>
          <p className="font-inter mt-4 text-xl text-black">
            Kombiniramo stručnost, iskustvo i individualni pristup kako bismo
            svakom klijentu omogućili najbolje rezultate.
          </p>
          <Link
            className="font-inter bg-red_preh mt-3 flex flex-row gap-3 rounded-lg p-3 font-semibold text-black"
            href="/kontakt"
          >
            <span>Kontaktirajte nas</span>
            <BsArrowRight className="text-center text-2xl text-black" />
          </Link>
        </div>
        <div className="flex flex-row items-center max-lg:flex-wrap max-lg:gap-y-10 max-sm:gap-y-0">
          <div className="flex flex-col items-center gap-5 border-r border-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <div className="bg-red_preh_t/80 rounded-full p-3">
              <LuShieldCheck className="text-red_preh text-6xl" />
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Stručnost i iskustvo
            </p>
            <p className="text-center text-2xl text-black">
              Godine prakse i stalne edukacije osiguravaju vrhunsku skrb.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 border-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10 lg:border-r">
            <div className="bg-red_preh_t/80 rounded-full p-3">
              <BiUser className="text-red_preh text-6xl" />
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Stručnost i iskustvo
            </p>
            <p className="text-center text-2xl text-black">
              Godine prakse i stalne edukacije osiguravaju vrhunsku skrb.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 border-r border-white p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <div className="bg-red_preh_t/80 rounded-full p-3">
              <FiTarget className="text-red_preh text-6xl" />
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Stručnost i iskustvo
            </p>
            <p className="text-center text-2xl text-black">
              Godine prakse i stalne edukacije osiguravaju vrhunsku skrb.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 p-2 max-lg:w-1/2 max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <div className="bg-red_preh_t/80 rounded-full p-3">
              <BiHeart className="text-red_preh text-6xl" />
            </div>
            <p className="text-center text-2xl font-semibold text-black">
              Stručnost i iskustvo
            </p>
            <p className="text-center text-2xl text-black">
              Godine prakse i stalne edukacije osiguravaju vrhunsku skrb.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
