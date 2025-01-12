import sr from "../library/ScrollReveal";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../shared/Button";
import Suradnje from "./Suradnje";
import Certifikati from "./Certifikati";
import { useEffect, useRef } from "react";

const OpisGrid = () => {
  const grid1 = useRef(null);
  const grid2 = useRef(null);
  const grid3 = useRef(null);
  const grid4 = useRef(null);
  const grid5 = useRef(null);
  const grid6 = useRef(null);
  const grid7 = useRef(null);
  const grid8 = useRef(null);
  const grid9 = useRef(null);
  const grid10 = useRef(null);
  const grid11 = useRef(null);

  useEffect(() => {
    sr.reveal(grid1.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });
    sr.reveal(grid2.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "right",
      reset: false,
    });
    sr.reveal(grid3.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
    sr.reveal(grid4.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });
    sr.reveal(grid5.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "right",
      reset: false,
    });
    sr.reveal(grid6.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
    sr.reveal(grid7.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
    sr.reveal(grid8.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });
    sr.reveal(grid9.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });
    sr.reveal(grid10.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
    sr.reveal(grid11.current, {
      duration: 1000,
      delay: 50,
      distance: "200px",
      easing: "ease-in-out",
      origin: "right",
      reset: false,
    });
  }, []);

  return (
    <>
      <section className="bg-stone-100">
        <h1 className="text-5xl font-oswald py-[5rem] text-center preh-background">
          O nama
        </h1>
        <div className="custom_grid px-10 py-5 bg-slate-200 mb-10">
          <div
            className="p-5 flex justify-center hover:scale-105 transition-all duration-1000"
            ref={grid8}
          >
            <img
              src="/images/logo/Prehab1.svg"
              alt="Prehab prostor"
              className="max-h-[35rem] hover:scale-110 transition-all duration-1000"
              loading="lazy"
            />
          </div>
          <div
            className="py-5 px-4 flex flex-col justify-center items-start"
            ref={grid7}
          >
            <h2 className="text-2xl lg:text-3xl mb-5 font-oswald text-red_preh font-bold underline">
              Prehabilitaion Therapy Center
            </h2>
            <p className="text-xl lg:text-2xl mb-5 font-oswald ">
              Zovem se <strong className="text-red_preh">Nikola Lukić</strong>,
              diplomirani sam fizioterapeut. Vaša vitalnost i kvaliteta života
              su mi na prvom mjestu, te se radujem prilici da vam pomognem
              ostvariti vaše najbolje zdravstvene rezultate.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[80%] m-auto auto-rows-auto md:auto-rows-[25rem] py-10 gap-y-10 gap-x-10">
          <div className="col-span-2 md:col-span-1 md:py-5 md:px-4 flex flex-col justify-center md:justify-center">
            <p
              className="text-2xl md:text-xl lg:text-2xl mb-5 font-oswald text-justify"
              ref={grid1}
            >
              Svoj profesionalni put u svijetu fizioterapije započeo sam u
              predivnom Zadru. S ponosom nosim titulu{" "}
              <span className="text-red_preh">diplomiranog fizioterapeuta</span>
              , koju sam stekao završetkom studija{" "}
              <span className="text-red_preh">fizioterapije u Zagrebu</span>.
              Moje stručno usavršavanje nikada ne prestaje, te se ponosno mogu
              pohvaliti mnogim certifikatima koji obuhvaćaju širok spektar
              fizioterapeutskih tehnika i pristupa.
            </p>
          </div>
          <div
            className="rounded-xl overflow-hidden hover:scale-105 transition-all duration-1000"
            ref={grid2}
          >
            <img
              src="/images/Nikola/masažni stol.jpg"
              alt="masažni stol Prehab"
              className="w-full h-full object-cover object-bottom hover:scale-110 transition-all duration-1000"
              loading="lazy"
            />
          </div>

          <div
            className="rounded-xl overflow-hidden hover:scale-105 transition-all duration-1000"
            ref={grid4}
          >
            <img
              src="/images/Nikola/čečanj.jpg"
              alt="čučanj prehab"
              className="w-full h-full object-cover object-bottom hover:scale-110 transition-all duration-1000"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 md:col-span-1 md:py-5 md:px-4 flex flex-col justify-center">
            <p
              className="text-2xl md:text-xl lg:text-2xl mb-5 font-oswald text-justify"
              ref={grid5}
            >
              Posjedujem duboko razumijevanje ljudskog tijela i mehanizama
              ozdravljenja, što mi omogućuje pružanje najkvalitetnije skrbi
              svojim pacijentima. Kroz godine rada, stekao sam neprocjenjivo
              iskustvo surađujući s sportskim klubovima poput{" "}
              <span className="text-red_preh">
                Nogometnog kluba Rudeš, Nogometnog kluba Abeceda, KK Sonik
                Puntamika, Vaterpolskog kluba Zadar, te Plivačkog kluba Zadar.
              </span>{" "}
            </p>
            <div ref={grid6}>
              <Button type="blue" href="/#suradnje">
                Suradnje <FaArrowLeft />
              </Button>
            </div>
          </div>

          <div
            className="row-start-5 md:row-start-3 col-span-2 md:col-span-1  md:py-5 md:px-4 flex flex-col justify-center"
            ref={grid9}
          >
            <p className="text-2xl md:text-xl  lg:text-2xl mb-5 font-oswald text-justify">
              Rad s vrhunskim mladim sportašima pružio mi je dragocjeno iskustvo
              i uvid u potrebe visokih performansi, a taj duh i posvećenost
              prenosim i na svakog pacijenta u svojoj privatnoj praksi. Ovdje u
              Prehabilitation Therapy Centeru, posvećujem se vašem zdravlju i
              dobrobiti, pružajući individualno prilagođene terapeutske
              tretmane.
            </p>
            <div ref={grid11}>
              <Button type="blue" href="/#usluge">
                Usluge <FaArrowLeft />
              </Button>
            </div>
          </div>
          <div
            className="row-start-4 md:row-start-3 col-span-2 md:col-span-1 rounded-xl overflow-hidden hover:scale-105 transition-all duration-1000"
            ref={grid10}
          >
            <img
              src="/images/Nikola/leđnjak2.png"
              alt="masažni stol Prehab"
              className="w-full h-full object-cover object-bottom hover:scale-110 transition-all duration-1000"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OpisGrid;
