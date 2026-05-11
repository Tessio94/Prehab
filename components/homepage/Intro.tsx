import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const Intro = () => {
  const [sliderIndex, setSliderIndex] = useState(1);

  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  function handleKeyEvent(e) {
    if (e.key === "ArrowRight") {
      setSliderIndex(sliderIndex + 1);
    } else if (e.key === "ArrowLeft") {
      setSliderIndex(sliderIndex - 1);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    return () => window.removeEventListener("keydown", handleKeyEvent);
  });

  useEffect(() => {
    if (sliderIndex < 1) {
      setSliderIndex(3);
    } else if (sliderIndex > 3) {
      setSliderIndex(1);
    }

    if (slide1.current && slide2.current && slide3.current) {
      const slides = [slide1.current, slide2.current, slide3.current];
      slides.forEach((slide) => {
        slide.classList.remove("active");
        slide.classList.remove("previous");
        slide.classList.remove("next");
        if (sliderIndex === +slide.dataset.number) {
          slide.classList.add("active");
        } else if (sliderIndex - 1 === +slide.dataset.number) {
          slide.classList.add("previous");
        } else if (sliderIndex + 1 === +slide.dataset.number) {
          slide.classList.add("next");
        } else {
          slide.classList.add("previous");
        }
      });
    }
  }, [sliderIndex]);

  return (
    <section
      id="intro"
      className="relative h-[1500px] w-[100vw] overflow-hidden sm:h-[1080px]"
    >
      <div
        className="absolute top-[45%] left-[50%] flex h-[80%] w-[80%] flex-col items-center justify-center rounded-xl transition-all duration-1000 lg:flex-row lg:bg-slate-300"
        ref={slide1}
        data-number="1"
      >
        <div className="xsm:px-8 relative h-[100%] w-[100%] rounded-t-xl bg-slate-300 px-4 py-10 lg:w-[50%] lg:rounded-t-none lg:bg-transparent">
          <h2 className="font-oswald xsm:mt-0 mt-5 mb-7 text-center text-5xl xl:text-6xl">
            Prehab Zadar
          </h2>
          <p className="font-oswald xxl:mb-10 text-justify text-2xl lg:mb-5 xl:text-3xl">
            <strong className="text-red_preh">Prehabilitation</strong> nudi
            profesionalnu fizioterapiju za brži oporavak. Specijalizirani smo za
            prevenciju ozljeda, rehabilitaciju i poboljšanje pokretljivosti.
          </p>
          <ul>
            <li className="font-oswald mt-5 text-xl xl:text-2xl">
              <span className="text-red_preh">1) Prevencija ozljeda:</span> Naše
              usluge pomažu u sprječavanju ozljeda kroz individualizirane
              programe vježbanja i savjete o pravilnom kretanju.
            </li>
            <li className="font-oswald mt-5 text-xl xl:text-2xl">
              <span className="text-red_preh">2) Brži oporavak:</span>{" "}
              Specijalizirani tretmani i rehabilitacijski programi ubrzavaju
              proces oporavka nakon ozljeda ili operacija.
            </li>
            <li className="font-oswald mt-5 mb-5 text-xl xl:text-2xl">
              <span className="text-red_preh">
                3) Poboljšanje kvalitete života:
              </span>{" "}
              Redovita fizioterapija poboljšava pokretljivost, smanjuje bolove i
              povećava ukupnu kvalitetu života.
            </li>
          </ul>
          <p className="xsm:h-[15%] xsm:justify-center xsm:text-3xl font-oswald text-red_preh xsm:px-8 absolute bottom-[95%] left-0 mx-auto flex h-[10%] w-full items-center justify-between gap-5 rounded-t-xl bg-slate-400 px-4 py-3 text-2xl font-bold lg:bottom-0 lg:rounded-none lg:rounded-r-none lg:rounded-bl-xl">
            <span>
              <img
                src="/images/logo/ikona.png"
                alt="logo"
                className="w-10"
                loading="lazy"
                height="20"
                width="20"
              />
            </span>
            Posjetite nas
            <span>
              <img
                src="/images/logo/ikona.png"
                alt="logo prehab"
                className="w-10"
                loading="lazy"
                height="20"
                width="20"
              />
            </span>
          </p>
        </div>
        <div className="h-[100%] w-[100%] overflow-hidden rounded-b-xl lg:w-[50%] lg:rounded-none lg:rounded-r-xl">
          <img
            src="/images/zadar/slika 1.jpg"
            alt="prehab zadar klinika"
            className="h-full w-full object-cover"
            loading="lazy"
            width="768"
            height="864"
          />
        </div>
      </div>
      <div
        className="absolute top-[45%] left-[50%] flex h-[80%] w-[80%] flex-col items-center justify-center rounded-xl transition-all duration-1000 lg:flex-row lg:bg-slate-300"
        ref={slide2}
        data-number="2"
      >
        <div className="relative flex h-[100%] w-[100%] basis-[40%] overflow-hidden rounded-t-xl lg:block lg:w-[50%] lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl">
          <img
            src="/images/certifikati/slika12.jpg"
            alt="certifikati"
            className="h-[100%] w-[100%] basis-[50%] object-right lg:h-[50%]"
            loading="lazy"
            width="614"
            height="432"
          />
          <img
            src="/images/certifikati/slika 7.jpg"
            alt="diplome prehab"
            className="hidden h-[100%] basis-[50%] object-cover sm:block lg:h-[50%] lg:w-[100%]"
            loading="lazy"
            width="614"
            height="432"
          />
        </div>
        <div className="xsm:px-8 h-[100%] w-[100%] basis-[60%] overflow-hidden rounded-b-xl bg-slate-300 px-4 py-4 lg:w-[50%] lg:rounded-none lg:rounded-r-xl lg:bg-transparent">
          <h2 className="font-oswald mb-5 text-center text-5xl lg:mb-7 lg:text-6xl">
            Obrazovanje
          </h2>
          <p className="font-oswald text-justify text-xl md:text-xl lg:text-2xl xl:text-3xl">
            <strong className="text-red_preh">Moje obrazovanje</strong> započelo
            je sa završenim fakultetom, gdje sam stekao temeljna znanja i
            vještine potrebne za moj profesionalni razvoj. Nakon uspješnog
            završetka fakulteta, nastavio sam ulagati u svoje znanje i
            kompetencije putem različitih certifikata.
          </p>
          <ul>
            <li className="xsm:text-xl font-oswald xsm:mt-4 mt-10 text-lg md:mt-5 lg:mt-6 lg:text-xl">
              <span className="text-red_preh">1)</span> Bacc. physioth - Zagreb
            </li>
            <li className="xsm:text-xl font-oswald xsm:mt-4 mt-4 text-lg md:mt-5 lg:mt-6 lg:text-xl">
              <span className="text-red_preh">2)</span> Stecco fascial
              manipulation lvl 3
            </li>
            <li className="xsm:text-xl font-oswald xsm:mt-4 mt-4 text-lg md:mt-5 lg:mt-6 lg:text-xl">
              <span className="text-red_preh">3)</span> ISST Schroth therapist
            </li>
            <li className="xsm:text-xl font-oswald xsm:mt-4 mt-4 text-lg md:mt-5 lg:mt-6 lg:text-xl">
              <span className="text-red_preh">4)</span> Basic pro coach
            </li>
            <li className="xsm:text-xl font-oswald xsm:mt-4 mt-4 text-lg md:mt-5 lg:mt-6 lg:text-xl">
              <span className="text-red_preh">5)</span> Student Osteopathy,
              neuro medicine, functional medicine
            </li>
          </ul>
        </div>
      </div>
      <div
        className="absolute top-[45%] left-[50%] flex h-[80%] w-[80%] flex-col items-center justify-center rounded-xl bg-slate-300 transition-all duration-1000 lg:flex-row"
        ref={slide3}
        data-number="3"
      >
        <div className="xsm:px-8 relative h-[100%] w-[100%] px-4 py-10 lg:w-[50%]">
          <h2 className="font-oswald mb-7 text-center text-5xl">Usluge</h2>
          <p className="font-oswald text-justify text-2xl lg:text-2xl xl:text-3xl">
            U <strong className="text-red_preh">Prehabilitation</strong> klinici
            nudimo razne profesionalne usluge fizioterapije te usluge
            individualnog i grupnog treninga kako bi vaše zdravlje nastavilo
            biti na svom maksimumu.
          </p>

          <div className="font-oswald mt-5 mb-10 flex flex-col items-center justify-center gap-3 text-xl">
            <p className="xxl:text-2xl xsm:no-underline flex items-center gap-1 text-justify text-lg underline lg:text-xl">
              <span className="text-red_preh xsm:flex hidden items-center gap-1 font-bold underline">
                Usluge <FaArrowRight />
              </span>{" "}
              Listu usluga i dodatne informacije pogledajte u sekciji "Usluge"
            </p>
            <button className="bg-red_preh font-oswald hover:text-red_preh hover:border-red_preh group mx-auto rounded-xl border-2 px-5 py-2 text-xl font-bold text-white transition-all duration-500 hover:border-2 hover:bg-slate-100">
              <a href="#usluge" className="flex items-center gap-2">
                Usluge{" "}
                <FaArrowDown className="transform transition-transform duration-500 group-hover:translate-y-1" />
              </a>
            </button>
          </div>

          <div className="font-oswald mt-5 flex flex-col items-center justify-center gap-2 text-xl">
            <p className="xxl:text-2xl xsm:no-underline flex items-center gap-1 text-justify text-lg underline lg:text-xl">
              <span className="text-red_preh xsm:flex hidden items-center gap-1 font-bold underline">
                Trening <FaArrowRight />
              </span>{" "}
              Vrste treninga i dodatne informacije pronađite u sekciji "Trening"
            </p>
            <button className="bg-red_preh font-oswald hover:text-red_preh hover:border-red_preh group mx-auto rounded-xl border-2 px-5 py-2 text-xl font-bold text-white transition-all duration-500 hover:border-2 hover:bg-slate-100">
              <a href="#trening" className="flex items-center gap-2">
                Trening{" "}
                <FaArrowDown className="transform transition-transform duration-500 group-hover:translate-y-1" />
              </a>
            </button>
          </div>
        </div>
        <div className="h-[100%] w-[100%] overflow-hidden rounded-b-xl lg:w-[50%] lg:rounded-r-xl">
          <img
            src="/images/zadar/slika 2.jpg"
            alt="prehab klinika"
            className="h-full w-full object-cover"
            loading="lazy"
            width="768"
            height="864"
          />
          <p className="xsm:h-[10%] xsm:justify-center xsm:text-3xl font-oswald text-red_preh xsm:px-8 absolute bottom-0 left-0 mx-auto flex h-[8%] w-full items-center justify-between gap-5 rounded-b-xl bg-slate-400 px-4 py-3 text-2xl font-bold lg:h-[15%]">
            <span>
              <img
                src="/images/logo/ikona.png"
                alt="logo"
                className="w-10"
                loading="lazy"
                width="20"
                height="20"
              />
            </span>
            Posjetite nas
            <span>
              <img
                src="/images/logo/ikona.png"
                alt="logo"
                className="w-10"
                width="20"
                height="20"
              />
            </span>
          </p>
        </div>
      </div>
      <button
        className="font-oswald text-red_preh hover:bg-red_preh group absolute top-[90%] left-[10%] z-10 flex translate-y-[-50%] items-center rounded-xl bg-slate-400 px-8 py-3 text-4xl transition-all duration-500 hover:text-slate-100 xl:top-[50%] xl:left-[2rem]"
        onClick={() => setSliderIndex((index) => index - 1)}
      >
        {" "}
        <RiArrowLeftWideFill className="transform transition-transform duration-500 group-hover:-translate-x-2" />{" "}
      </button>
      <button
        className="font-oswald text-red_preh hover:bg-red_preh group absolute top-[90%] right-[10%] z-10 flex translate-y-[-50%] items-center rounded-xl bg-slate-400 px-8 py-3 text-4xl transition-all duration-500 hover:text-slate-100 xl:top-[50%] xl:right-[2rem]"
        onClick={() => setSliderIndex((index) => index + 1)}
      >
        <RiArrowRightWideFill className="transform transition-transform duration-500 group-hover:translate-x-2" />
      </button>
      <div className="xsm:bottom-[2rem] font-oswald absolute bottom-[5.5rem] left-0 flex h-[15%] w-full items-center justify-center gap-5 text-3xl sm:bottom-[1.7rem]">
        {sliderIndex === 1 ? (
          <>
            <GoDotFill
              onClick={() => setSliderIndex(1)}
              className="cursor-pointer"
            />
            <GoDot
              onClick={() => setSliderIndex(2)}
              className="cursor-pointer"
            />
            <GoDot
              onClick={() => setSliderIndex(3)}
              className="cursor-pointer"
            />
          </>
        ) : sliderIndex === 2 ? (
          <>
            <GoDot
              onClick={() => setSliderIndex(1)}
              className="cursor-pointer"
            />
            <GoDotFill
              onClick={() => setSliderIndex(2)}
              className="cursor-pointer"
            />
            <GoDot
              onClick={() => setSliderIndex(3)}
              className="cursor-pointer"
            />
          </>
        ) : (
          <>
            {" "}
            <GoDot
              onClick={() => setSliderIndex(1)}
              className="cursor-pointer"
            />
            <GoDot
              onClick={() => setSliderIndex(2)}
              className="cursor-pointer"
            />
            <GoDotFill
              onClick={() => setSliderIndex(3)}
              className="cursor-pointer"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Intro;
