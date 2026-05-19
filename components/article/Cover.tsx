import { CgCalendar } from "react-icons/cg";
import { CiLocationOn, CiLock } from "react-icons/ci";

const Cover = () => {
  return (
    <section className="relative h-fit">
      <div className="max-h-150 min-h-fit w-full bg-[url(/images/skolioza.png)] bg-cover bg-no-repeat max-[1650px]:bg-position-[40%] max-[900px]:bg-position-[80%]! max-xl:bg-position-[60%]">
        <div className="xxl:w-1/2 mt-auto flex w-fit flex-col items-start gap-5 p-10 pt-55 text-xl font-medium max-md:px-6 lg:w-2/3">
          <p className="font-oswald mt-2 text-4xl font-medium text-slate-100 underline lg:text-5xl">
            Skolioza kamp Biograd na moru
          </p>
          <p className="font-inter mt-2 line-clamp-3 text-xl text-slate-100 lg:text-2xl">
            Stručno vodstvo, vježbe prilagođene vašim potrebama i prekrasan
            ambijent mora, sve je savršena prilika za rad na sebi, druženje i
            edukaciju.
          </p>
          <div className="mt-10 flex flex-row flex-wrap items-center gap-8">
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
      </div>
    </section>
  );
};

export default Cover;
