import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Banner = ({
  color = "#d23366",
  buttonColor = "#121a29",
  headerColor = "#ffffff",
}) => {
  return (
    <section className="px-6 py-10 md:px-10 lg:px-16">
      <div className="px-10 max-md:px-0">
        <div
          className="flex flex-col items-center justify-between gap-6 rounded-xl p-4 sm:gap-10 sm:p-8 xl:flex-row xl:p-10"
          style={{ backgroundColor: color }}
        >
          <div className="flex flex-row items-center sm:gap-6 lg:gap-10">
            <div className="to-red_preh from-red_preh rounded-full bg-linear-to-bl via-slate-100 p-6 max-sm:hidden">
              <RiCalendarScheduleLine className="text-red_preh text-6xl" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <p
                className="text-3xl font-semibold"
                style={{ color: headerColor }}
              >
                Želite i vi biti dio naše priče?
              </p>
              <p className="text-xl text-white/80">
                Rezervirajte termin i započnite svoj put prema boljem zdravlju!
              </p>
            </div>
          </div>

          <Link
            className="font-inter flex shrink-0 flex-row items-center gap-3 rounded-lg px-5 py-3"
            style={{ backgroundColor: buttonColor }}
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
