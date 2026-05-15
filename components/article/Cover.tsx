import Image from "next/image";
import { CgCalendar } from "react-icons/cg";
import Button from "../shared/Button";
import { FaArrowRight, FaLocationArrow } from "react-icons/fa";
import { CiLocationOn, CiLock } from "react-icons/ci";

const Cover = () => {
  return (
    <section className="relative">
      <Image src="/images/skolioza.png" width={1920} height={560} alt="" />
      <div className="absolute bottom-0 left-0 flex h-fit w-1/2 flex-col items-start gap-5 p-10 text-xl font-medium">
        <p className="font-oswald mt-2 text-5xl font-medium text-slate-100 underline">
          Skolioza kamp Biograd na moru
        </p>
        <p className="font-inter mt-2 text-2xl text-slate-100">
          Stručno vodstvo, vježbe prilagođene vašim potrebama i prekrasan
          ambijent mora, sve je savršena prilika za rad na sebi, druženje i
          edukaciju.
        </p>
        <div className="mt-10 flex flex-row items-center gap-8">
          <div className="flex flex-row items-center gap-3 text-slate-100">
            <CgCalendar className="text-3xl" />
            <time dateTime="">15.05.2025</time>
          </div>
          <div className="flex flex-row items-center gap-3 text-slate-100">
            <CiLocationOn className="text-3xl" />
            <time dateTime="">Biograd na moru</time>
          </div>
          <div className="flex flex-row items-center gap-3 text-slate-100">
            <CiLock className="text-3xl" />
            <time dateTime="">5 min čitanje</time>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
