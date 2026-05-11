import { FaArrowRight } from "react-icons/fa";
// import Button from "@/components/shared/Button";

import { useEffect, useRef } from "react";

const Trening = () => {
  return (
    <>
      <section id="trening" className="relative overflow-hidden pb-32">
        <div className="p-8">
          <h2 className="font-oswald mb-10 text-5xl">Trening</h2>
          <span className="font-oswald text-red_preh xl2:top-[5rem] xl2:left-[50%] xl2:rotate-[-35deg] md2:left-[70%] md2:top-[80%] md2:rotate-[25deg] absolute top-[4.5%] left-[50%] rotate-[-15deg] rounded-xl border-2 border-red-500 bg-slate-300 px-4 text-xl font-bold sm:px-6 sm:py-2 sm:text-3xl xl:top-[3.5rem] xl:left-[40%] xl:rotate-[-25deg]">
            Dolazi uskoro !!
          </span>
          <div className="">
            <h4 className="font-oswald mb-4 text-2xl">
              Prijavite se na individualni trening ili na grupni trening
            </h4>
            <p className="mb-10 text-xl">
              Uskoro u našoj ponudi nudit ćemo program individualnih treninga te
              grupnih treninga
            </p>
            <div className="bg-red_preh_t flex flex-col gap-2 rounded-t-xl px-5 py-4">
              <h4 className="font-oswald text-2xl font-bold text-red-900">
                Individualni trening
              </h4>
              <p className="font-oswald text-lg">
                Individualni trening omogućava personalizirani pristup
                vježbanju, prilagođen specifičnim ciljevima i potrebama
                pojedinca. <br />
                Trener pruža stalnu pažnju i stručnost, pomažući u pravilnom
                izvođenju vježbi i postizanju željenih rezultata.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-b-xl bg-slate-300 px-5 py-4">
              <h4 className="font-oswald text-2xl font-bold text-black">
                Grupni trening
              </h4>
              <p className="font-oswald text-lg">
                Grupni trening nudi dinamičnu atmosferu i zajedničku motivaciju.
                Vježbanje u grupi povećava socijalnu podršku i angažiranost,
                <br />
                potičući sudionike da ostanu dosljedni i postignu svoje ciljeve
                kroz timski duh i zajedničke aktivnosti.
              </p>
            </div>
          </div>
        </div>
        <div className="xxl:right-[-20%] absolute top-[-8rem] right-[-28%] hidden w-[50rem] overflow-hidden rounded-[60%] xl:block">
          <img
            src="/images/Nikola/čečanj.jpg"
            alt="čučanj vježba"
            loading="lazy"
            width="512"
            height="640"
          />
        </div>
        <div className="md2:left-[-19%] absolute bottom-[-13.5rem] left-[-8rem] md:left-[-23%] lg:left-[-8%] xl:w-[30rem]">
          <img
            src="/images/Nikola/leđnjak 1.png"
            alt="leđnjak vježba"
            className="bg-cover bg-center"
            loading="lazy"
            height="585"
            width="480"
          />
        </div>
        <button className="bg-red_preh font-oswald hover:text-red_preh hover:border-red_preh group mx-auto block rounded-xl border-2 px-5 py-2 text-xl font-bold text-white transition-all duration-500 hover:border-2 hover:bg-slate-100">
          <a href="/kontakt" className="flex items-center gap-2">
            Kontaktirajte nas{" "}
            <FaArrowRight className="transform transition-transform duration-500 group-hover:translate-x-2" />
          </a>
        </button>
      </section>
    </>
  );
};

export default Trening;
