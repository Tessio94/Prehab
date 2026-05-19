import { BiUser } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="bg-slate-200/40 px-6 py-10 md:px-10 lg:px-16">
      <div className="flex flex-col gap-15 p-10 max-xl:items-center max-md:p-0 max-md:py-10">
        <div className="flex flex-col items-center">
          <p className="font-oswald text-red_preh text-xl font-semibold uppercase">
            Zašto odabrati nas
          </p>
          <p className="after:bg-red_preh font-oswald relative text-center text-4xl font-bold text-black after:absolute after:top-[calc(100%+10px)] after:left-1/2 after:h-1.5 after:w-20 after:-translate-x-1/2 after:rounded-2xl">
            Vaše povjerenje je naš najveći uspjeh.
          </p>{" "}
        </div>
        <div className="flex flex-row items-center gap-16 max-lg:flex-wrap max-lg:justify-center max-lg:gap-x-10 max-lg:gap-y-10 max-sm:gap-y-10">
          <div className="flex flex-col items-start gap-5 rounded-xl border-r border-white bg-white p-6 max-lg:w-[45%] max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <FaQuoteLeft className="text-red_preh text-6xl" />

            <p className="text-2xl text-black">
              Nikola je vrhunski stručnjak koji pristupa svakom pacijentu s puno
              pažnje i znanja. Zahvaljuljući njegovom radu vratio sam se jači
              nego prije!
            </p>
            <div className="flex flex-row items-center gap-10">
              <div className="h-10 w-10 rounded-full">
                <BiUser className="text-5xl" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <p className="text-2xl font-bold text-black">Marko P.</p>
                <p className="text-2xl text-black/80">Nogometaš</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 rounded-xl border-r border-white bg-white p-6 max-lg:w-[45%] max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <FaQuoteLeft className="text-red_preh text-6xl" />

            <p className="text-2xl text-black">
              Nikola je vrhunski stručnjak koji pristupa svakom pacijentu s puno
              pažnje i znanja. Zahvaljuljući njegovom radu vratio sam se jači
              nego prije!
            </p>
            <div className="flex flex-row items-center gap-10">
              <div className="h-10 w-10 rounded-full">
                <BiUser className="text-5xl" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <p className="text-2xl font-bold text-black">Marko P.</p>
                <p className="text-2xl text-black/80">Nogometaš</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 rounded-xl border-r border-white bg-white p-6 max-lg:w-[45%] max-sm:w-full max-sm:border-r-0 max-sm:border-b max-sm:py-10">
            <FaQuoteLeft className="text-red_preh text-6xl" />

            <p className="text-2xl text-black">
              Nikola je vrhunski stručnjak koji pristupa svakom pacijentu s puno
              pažnje i znanja. Zahvaljuljući njegovom radu vratio sam se jači
              nego prije!
            </p>
            <div className="flex flex-row items-center gap-10">
              <div className="h-10 w-10 rounded-full">
                <BiUser className="text-5xl" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <p className="text-2xl font-bold text-black">Marko P.</p>
                <p className="text-2xl text-black/80">Nogometaš</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
