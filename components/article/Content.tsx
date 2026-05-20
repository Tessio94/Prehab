import { BsTelephone } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { CiCalendar, CiClock1, CiLocationOn } from "react-icons/ci";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaQuoteLeft,
  FaWhatsapp,
} from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import Button from "../shared/Button";

const Content = () => {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-26">
      <div className="mx-auto flex w-full flex-col gap-8 px-10 max-md:px-0 xl:flex-row">
        <aside className="order-1 flex flex-col items-start gap-5 xl:sticky xl:top-[110px] xl:max-h-[calc(100vh-110px)] xl:w-fit xl:items-center xl:self-start xl:overflow-y-auto xl:pb-20">
          <p className="font-inter text-black_preh text-xl font-medium">
            Podijeli članak
          </p>
          <div className="shadow-black_preh/60 w-fit rounded-xl bg-slate-100/80 p-5 shadow-xl">
            <div className="flex w-fit flex-row items-center gap-8 xl:flex-col">
              <a href="" className="group inline-block">
                <FaFacebook className="text-black_preh text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600" />
              </a>
              <a href="" className="group inline-block">
                <FaInstagram className="text-black_preh text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-pink-600" />
              </a>
              <a href="" className="group inline-block">
                <FaWhatsapp className="text-black_preh text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-green-400" />
              </a>
              <a href="" className="group inline-block">
                <FaLink className="text-black_preh text-2xl transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600" />
              </a>
            </div>
          </div>
        </aside>
        <main className="order-3 flex flex-1 flex-col gap-10 xl:order-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <p className="font-inter text-xl">
                U stručno vodstvo, vježbe prilagođene vašim potrebama i
                prekrasan ambijent mora, ovo je savršena prilika za rad na sebi,
                druženje i edukaciju.
              </p>
              <p className="font-inter text-xl">
                Naš 7-dnevni kamp u Biogradu na Moru namijenjen je djeci,
                adoloscentima i odraslima s dijagnozom skolioze, te svima koji
                žele naučiti više o pravilnom držanju, tijelu, jačanju mišića i
                prevenciji bolova.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-oswald after:bg-red_preh relative text-2xl font-bold after:absolute after:top-[105%] after:left-0 after:h-1.5 after:w-10 after:rounded-xl">
                Što vas očekuje u kampu
              </h4>
              <ul className="mt-2 flex flex-col items-start gap-3">
                <li className="xsm:gap-3 flex flex-row items-center gap-2">
                  <CgCheck className="text-red_preh shrink-0 text-3xl" />
                  <p className="font-inter text-lg xl:text-[22px]">
                    Individualizirane vježbe i terapije
                  </p>
                </li>
                <li className="xsm:gap-3 flex flex-row items-center gap-2">
                  <CgCheck className="text-red_preh shrink-0 text-3xl" />
                  <p className="font-inter text-lg xl:text-[22px]">
                    Individualizirane vježbe i terapije
                  </p>
                </li>
                <li className="xsm:gap-3 flex flex-row items-center gap-2">
                  <CgCheck className="text-red_preh shrink-0 text-3xl" />
                  <p className="font-inter text-lg xl:text-[22px]">
                    Individualizirane vježbe i terapije
                  </p>
                </li>
                <li className="xsm:gap-3 flex flex-row items-center gap-2">
                  <CgCheck className="text-red_preh shrink-0 text-3xl" />
                  <p className="font-inter text-lg xl:text-[22px]">
                    Individualizirane vježbe i terapije
                  </p>
                </li>
                <li className="xsm:gap-3 flex flex-row items-center gap-2">
                  <CgCheck className="text-red_preh shrink-0 text-3xl" />
                  <p className="font-inter text-lg xl:text-[22px]">
                    Individualizirane vježbe i terapije
                  </p>
                </li>
              </ul>
              <div className="flex flex-row items-center justify-center rounded-xl bg-slate-100/80 px-10 py-3.5 sm:px-3.5 lg:px-20">
                <div className="flex flex-row items-start gap-4 sm:gap-5 lg:gap-7">
                  <FaQuoteLeft className="text-red_preh shrink-0 text-4xl lg:text-5xl" />
                  <p className="font-inter text-2xl lg:text-3xl">
                    Fokusirani smo na individualni pristup i stvaranje zdravih
                    navika koje možete ponijeti sa sobom kući.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-oswald after:bg-red_preh relative text-2xl font-bold after:absolute after:top-[105%] after:left-0 after:h-1.5 after:w-10 after:rounded-xl">
                Zašto je važan pravilan pristup skoliozi?
              </h4>
              <p className="font-inter text-xl">
                Skolioza je posturalna deforamcija kralježnice koja često
                uzrokuje bolove, loše držanje i smanjenju funckiionalnost
                tijela. Ranim i pravilnim pristupom može se značajno poboljšati
                kvaliteta života.
              </p>
              <p className="font-inter text-xl">
                Naš cilj je pružiti cjelovitu podršku svima koji se bore s ovim
                izazovom kroz znanje, pokret i zajedništvo.
              </p>
            </div>
          </div>
        </main>
        <aside className="order-3 flex flex-col gap-5 xl:sticky xl:top-[110px] xl:max-h-[calc(100vh-110px)] xl:w-[280px] xl:self-start">
          <div className="shadow-bg-black_preh/70 flex flex-col items-start gap-8 rounded-xl bg-slate-100/80 p-5 shadow-2xl">
            <p className="font-inter text-black_preh text-xl font-bold">
              Detalji kampa
            </p>
            <div className="flex flex-col items-start gap-5">
              <div className="flex flex-row items-stretch gap-2">
                <CiLocationOn className="text-red_preh text-4xl" />
                <div className="flex flex-col items-start justify-between">
                  <span className="font-semibold">Lokacija</span>
                  <span>Biograd na Moru</span>
                </div>
              </div>
              <div className="flex flex-row items-stretch gap-2">
                <CiCalendar className="text-red_preh text-4xl" />
                <div className="flex flex-col items-start justify-between">
                  <span className="font-semibold">Datum</span>
                  <span>Lipanj 2025.</span>
                </div>
              </div>
              <div className="flex flex-row items-stretch gap-2">
                <CiClock1 className="text-red_preh text-4xl" />
                <div className="flex flex-col items-start justify-between">
                  <span className="font-semibold">Trajanje</span>
                  <span>7 dana</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="mb-3 flex flex-row items-center gap-2">
                <IoInformation className="text-red_preh text-xl" />
                <span>Za više informacija</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <TfiWorld className="text-red_preh text-xl" />

                <a href="" target="__blank">
                  www.ridesanum.hr
                </a>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsTelephone className="text-red_preh text-xl" />
                <div>
                  <span>Ridesanum</span>
                  <span className="px-1">|</span>
                  <a href="">091/9355-858</a>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsTelephone className="text-red_preh text-xl" />
                <div>
                  <span>Balboa Gym</span>
                  <span className="px-1">|</span>
                  <a href="">091/9355-858</a>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsTelephone className="text-red_preh text-xl" />
                <div>
                  <span>Prehab Centar</span>
                  <span className="px-1">|</span>
                  <a href="">091/9355-858</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black_preh shadow-bg-black_preh/70 flex flex-col items-start gap-8 rounded-xl p-5 text-slate-100 shadow-2xl">
            <div className="flex flex-col items-start gap-3">
              <p className="text-2xl font-semibold">
                Rezervirajte svoje mjesto već danas!
              </p>
              <p className="text-xl text-white/80">
                Broj mjesta je ograničen. Osigurajte svoje mejsto na vrijeme!
              </p>
            </div>
            <Button type="red" href="/kontakt">
              <span className="text-nowrap">Kontaktirajte nas</span>
              <FaArrowRight className="text-2xl transition-all duration-300 group-hover:translate-x-3" />
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Content;
