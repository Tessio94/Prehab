// import { useEffect, useRef } from "react";

const HomeProfile = () => {
  return (
    <section className="mb-10 bg-slate-100">
      <div className="custom_grid m-auto w-[90%] gap-4 py-3 sm:w-[80%]">
        <div className="flex h-[12rem] items-center justify-between gap-4 rounded-lg bg-slate-400 px-5 py-3">
          <div className="aspect-square h-full w-full basis-1/2 overflow-hidden">
            <img
              src="/images/Nikola/O_nikoli_2.jpg"
              alt="Nikola Lukić slika"
              className="rounded-custom_radius h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex basis-[45%] flex-col items-start gap-2 sm:basis-[50%]">
            <h3 className="font-oswald text-3xl">Nikola Lukić</h3>
            <p className="text-xl">bacc. Physioth.</p>
          </div>
        </div>
        <div className="flex h-[12rem] items-center justify-between gap-4 rounded-lg bg-slate-400 px-5 py-3">
          <div className="rounded-custom_radius aspect-square h-full w-full basis-1/2 overflow-hidden">
            <img
              src="/images/Nikola/masažni_stol_1.jpg"
              alt="masažni stol prehab"
              className="rounded-custom_radius h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex basis-[45%] flex-col items-start gap-2 sm:basis-[50%]">
            <h3 className="font-oswald text-3xl">Radno vrijeme:</h3>
            <p className="text-md">pon-pet: 08-16 h</p>
            <em className="text-sm">*po dogovoru</em>
          </div>
        </div>

        <div className="flex h-[12rem] items-center justify-between gap-4 rounded-lg bg-slate-400 px-5 py-3">
          <div className="rounded-custom_radius aspect-square h-full w-full basis-1/2 overflow-hidden">
            <img
              src="/images/Nikola/višnjik_1.jpg"
              alt="zadar višnjik"
              className="rounded-custom_radius h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex basis-[45%] flex-col items-start gap-2 sm:basis-[50%]">
            <h3 className="font-oswald text-3xl">Lokacije:</h3>
            <p className="text-md">Splitska ulica 3</p>
            <p className="text-md">Bukovačka 15</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProfile;

/*
1) naslovnica, staviti na prvi grid prijelaz after elementa sa tipa pogledaj više o meni itd.
2) Drugo na naslovnici sa velikom slikom ide teskt o prehabu
3) onda idu usluge (potencijalno grid icon sa ikonama i tekstom)
3.1) ubaciti u usluge grid di se preko dvije kolumen nalaze plakati
4) ubaciti hyperplexed slider te dodatno link sa više
** neam hrvoja, dovrštii stranici na poslu
*/
