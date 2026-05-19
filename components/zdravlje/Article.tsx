import Image from "next/image";
import { CgCalendar } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";

const Article = () => {
  return (
    <a
      href=""
      className="group border-red_preh_t shadow-red_preh_t/60 z-100 flex cursor-pointer flex-col overflow-hidden rounded-2xl border-2 shadow-xl"
    >
      <div className="shrink-0 overflow-hidden">
        <Image
          src="/images/novosti/skolioza_banner.jpg"
          className="transition-all duration-300 group-hover:scale-105"
          alt=""
          width={3840}
          height={2160}
        />
      </div>
      <div className="flex grow flex-col justify-between gap-6 bg-slate-100/80 p-3">
        <h5 className="font-oswald text-black_preh text-2xl font-semibold">
          Što je hidrogen?
        </h5>
        <p className="text-black_preh">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          quasi?.
        </p>
        <div className="mt-auto flex flex-row items-center gap-4">
          <div className="text-red_preh flex flex-row items-center gap-1.5">
            <CgCalendar className="text-3xl" />
            <time dateTime="">15.05.2025</time>
          </div>
          <div className="text-red_preh flex flex-row items-center gap-1.5 font-semibold">
            <span className="text-nowrap">Pročitajte više</span>{" "}
            <FaArrowRight className="transition-all duration-300 group-hover:translate-x-3" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Article;
