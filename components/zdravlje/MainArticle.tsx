import Image from "next/image";
import { CgCalendar } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/shared/Button";

const MainArticle = () => {
  return (
    <section className="py-10 md:px-20 lg:px-16">
      <div className="px-10">
        <div className="border-black_preh shadow-black_preh/30 relative h-[540px] rounded-xl border-2 bg-[url(/images/skolioza.png)] shadow-xl">
          <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col items-start gap-5 p-10 text-xl font-medium">
            <p className="bg-red_preh font-oswald w-fit rounded-xl px-3 py-1 text-slate-100 uppercase">
              Istaknuto
            </p>
            <p className="font-oswald mt-2 text-5xl font-medium text-slate-100 underline">
              Skolioza kamp Biograd na moru
            </p>
            <p className="font-inter mt-2 text-2xl text-slate-100">
              Stručno vodstvo, vježbe prilagođene vašim potrebama i prekrasan
              ambijent mora, sve je savršena prilika za rad na sebi, druženje i
              edukaciju.
            </p>
            <div className="mt-auto flex flex-row items-center gap-8">
              <div className="text-red_preh flex flex-row items-center gap-3">
                <CgCalendar className="text-3xl" />
                <time dateTime="">15.05.2025</time>
              </div>
              <Button type="red" href="o-nama" header="header">
                <span className="text-nowrap">Pročitajte više</span>{" "}
                <FaArrowRight className="transition-all duration-300 group-hover:translate-x-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
