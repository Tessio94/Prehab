// import { useEffect, useRef } from "react";

const Suradnje = () => {
  return (
    <section
      id="suradnje"
      className="bg-slate-100/80 px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="p-10 max-md:p-0 max-md:py-10">
        <h2 className="font-oswald text-red_preh mb-5 text-5xl">Suradnje</h2>
        <div className="custom_grid2 auto-rows-max md:auto-rows-[10rem]">
          <div className="group border-red_preh relative overflow-hidden rounded-xl border-4">
            <img
              src="/images/suradnje/Nk Rudeš.jpg"
              className="h-full w-full sm:object-cover md:object-fill"
              alt="NK Rudeš"
              loading="lazy"
            />
            <div className="from-red_preh_t font-oswald absolute top-0 right-0 bottom-0 left-0 flex translate-y-full items-center justify-center bg-gradient-to-t to-black text-3xl font-bold text-white transition-all duration-1000 group-hover:translate-y-0">
              NK Rudeš
            </div>
          </div>
          <div className="group border-red_preh relative overflow-hidden rounded-xl border-4">
            <img
              src="/images/suradnje/abeceda.jpg"
              className="h-full w-full"
              alt="NK Abeceda"
              loading="lazy"
            />
            <div className="from-red_preh_t font-oswald absolute top-0 right-0 bottom-0 left-0 flex translate-y-full items-center justify-center bg-gradient-to-t to-black text-3xl font-bold text-white transition-all duration-1000 group-hover:translate-y-0">
              NK Abeceda
            </div>
          </div>
          <div className="group border-red_preh relative overflow-hidden rounded-xl border-4">
            <img
              src="/images/suradnje/sonik.jpg"
              className="h-full w-full sm:object-cover md:object-fill"
              alt="KK Aleta Puntamika"
              loading="lazy"
            />
            <div className="from-red_preh_t font-oswald absolute top-0 right-0 bottom-0 left-0 flex translate-y-full items-center justify-center bg-gradient-to-t to-black text-xl font-bold text-white transition-all duration-1000 group-hover:translate-y-0">
              KK Aleta Puntamika
            </div>
          </div>
          <div className="group border-red_preh relative overflow-hidden rounded-xl border-4">
            <img
              src="/images/suradnje/plivački klub zadar.png"
              className="h-full w-full"
              alt="PK Zadar"
              loading="lazy"
            />
            <div className="from-red_preh_t font-oswald absolute top-0 right-0 bottom-0 left-0 flex translate-y-full items-center justify-center bg-gradient-to-t to-black text-3xl font-bold text-white transition-all duration-1000 group-hover:translate-y-0">
              PK Zadar
            </div>
          </div>
          <div className="group border-red_preh relative overflow-hidden rounded-xl border-4">
            <img
              src="/images/suradnje/vaterpolo klub zadar.png"
              className="h-full w-full"
              alt="VK Zadar"
              loading="lazy"
            />
            <div className="from-red_preh_t font-oswald absolute top-0 right-0 bottom-0 left-0 flex translate-y-full items-center justify-center bg-gradient-to-t to-black text-3xl font-bold text-white transition-all duration-1000 group-hover:translate-y-0">
              VK Zadar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suradnje;
