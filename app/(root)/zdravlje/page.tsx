import Options from "@/components/photo/Options";
import Intro from "@/components/zdravlje/Intro";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Intro />
      <Options />
      {/* <div className="py-10 md:px-20 lg:px-16">
        <div className="border-black_preh shadow-black_preh/30 relative rounded-[90px] border-2 bg-[url(/images/logo/background.png)] shadow-xl">
          <div className="absolute top-10 left-20 text-xl font-medium">
            <p className="bg-red_preh font-oswald w-fit rounded-xl px-3 py-1 text-slate-100 uppercase">
              Istaknuto
            </p>
            <p className="font-oswald mt-2 text-5xl font-medium underline">
              Skolioza kamp <br /> Biograd na moru
            </p>
          </div>
          <Image
            src="/images/novosti/skolioza-novi2.png"
            alt=""
            width={1920}
            height={650}
          />
        </div>
      </div> */}
    </>
  );
};

export default Page;
