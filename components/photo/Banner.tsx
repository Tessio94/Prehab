import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Banner = () => {
  return (
    <section className="py-10 md:px-10 lg:px-16">
      <div className="px-10">
        <div className="bg-red_preh flex flex-row items-center justify-between gap-10 rounded-xl p-10">
          <div className="flex flex-row items-center gap-10">
            <div className="to-red_preh from-red_preh rounded-full bg-linear-to-bl via-slate-100 p-6">
              <RiCalendarScheduleLine className="text-red_preh text-6xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">
                Želite i vi biti dio naše priče?
              </p>
              <p className="text-xl text-white/80">
                Rezervirajte termin i započnite svoj put prema boljem zdravlju!
              </p>
            </div>
          </div>

          <Link
            className="font-inter bg-black_preh flex flex-row items-center gap-3 rounded-lg px-5 py-3"
            href="/kontakt"
          >
            <span className="text-2xl font-semibold text-white">
              Kontaktirajte nas
            </span>
            <BsArrowRight className="text-center text-3xl font-semibold text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
