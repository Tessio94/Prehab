import sr from "../library/ScrollReveal";
import { useEffect, useRef } from "react";

const Suradnje = ({ suradnje }) => {
  const grid1 = useRef(null);
  const grid2 = useRef(null);
  const grid3 = useRef(null);
  const grid4 = useRef(null);
  const grid5 = useRef(null);

  useEffect(() => {
    sr.reveal(
      [
        grid1.current,
        grid2.current,
        grid3.current,
        grid4.current,
        grid5.current,
      ],
      {
        duration: 1000,
        delay: 50,
        distance: "100px",
        easing: "ease-in-out",
        origin: "bottom",
        reset: false,
      }
    );
  }, []);

  return (
    <section id="suradnje" ref={suradnje}>
      <div className="p-8 sm:p-16">
        <h2 className="text-5xl font-oswald mb-5">Suradnje</h2>
        <div className="custom_grid2 auto-rows-max sm:auto-rows-[10rem]">
          <div
            className="relative rounded-xl overflow-hidden group border-red_preh border-4"
            ref={grid1}
          >
            <img
              src="/images/suradnje/Nk Rudeš.jpg"
              className="w-full h-full"
              alt="NK Rudeš"
            />
            <div className="bg-gradient-to-t  from-red_preh_t to-black  absolute top-0 left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-1000 text-white font-bold font-oswald flex items-center justify-center text-3xl">
              NK Rudeš
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-hidden group border-red_preh border-4"
            ref={grid2}
          >
            <img
              src="/images/suradnje/abeceda.jpg"
              className="w-full h-full"
              alt="NK Abeceda"
            />
            <div className="bg-gradient-to-t  from-red_preh_t to-black  absolute top-0 left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-1000 text-white font-bold font-oswald flex items-center justify-center text-3xl">
              NK Abeceda
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-hidden group border-red_preh border-4"
            ref={grid3}
          >
            <img
              src="/images/suradnje/sonik.jpg"
              className="w-full h-full"
              alt="KK Aleta Puntamika"
            />
            <div className="bg-gradient-to-t  from-red_preh_t to-black  absolute top-0 left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-1000 text-white font-bold font-oswald flex items-center justify-center text-xl">
              KK Aleta Puntamika
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-hidden group border-red_preh border-4"
            ref={grid4}
          >
            <img
              src="/images/suradnje/plivački klub zadar.png"
              className="w-full h-full"
              alt="PK Zadar"
            />
            <div
              className="bg-gradient-to-t  from-red_preh_t to-black  absolute top-0 left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-1000 text-white font-bold font-oswald flex items-center justify-center text-3xl"
              ref={grid5}
            >
              PK Zadar
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-hidden group border-red_preh border-4"
            ref={grid5}
          >
            <img
              src="/images/suradnje/vaterpolo klub zadar.png"
              className="w-full h-full"
              alt="VK Zadar"
            />
            <div className="bg-gradient-to-t from-red_preh_t to-black absolute top-0 left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-1000 text-white font-bold font-oswald flex items-center justify-center text-3xl">
              VK Zadar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suradnje;
