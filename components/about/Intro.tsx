import Image from "next/image";
import { BiArrowToBottom } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

const Intro = () => {
  return (
    <>
      <div className="flex w-full flex-col py-16 md:px-10 lg:px-16 xl:flex-row">
        <div className="flex flex-col items-start gap-6 p-10 xl:w-1/2">
          <h1 className="text-red_preh text-semibold font-oswald text-4xl">
            O nama
          </h1>
          <h2 className="after:bg-red_preh font-oswald relative text-7xl font-bold after:absolute after:top-[110%] after:left-0 after:h-2 after:w-20 after:rounded-2xl xl:text-6xl 2xl:text-7xl">
            Prehab Therapy <span className="text-red_preh">Center</span>
          </h2>
          <p className="text-semibold font-inter mt-5 text-3xl text-black">
            Zovem se <strong className="text-red_preh">Nikola Lukić</strong>,
            diplomirani sam fizioterapeut. Vaša vitalnost i kvaliteta života su
            mi na prvom mjestu, te se radujem prilici da vam pomognem ostvariti
            vaše najbolje zdravstvene rezultate.
          </p>
          <button className="font-oswald border-red_preh mt-3 flex flex-row items-center gap-2 rounded-xl border bg-black px-5 py-1 text-2xl font-semibold text-white">
            <span>Više o meni</span>
            <GoTriangleDown />
          </button>
        </div>
        <div className="bg-none bg-contain bg-center bg-no-repeat xl:w-1/2 xl:bg-[url('/images/o-nama-intro3.png')]">
          <Image
            src="/images/o-nama-intro3.png"
            className="xl:hidden"
            width={960}
            height={658}
            alt="Fizioterapeut Nikola Lukić"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
