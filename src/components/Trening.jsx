import { FaArrowRight } from "react-icons/fa";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import sr from "../library/ScrollReveal";
import { useEffect, useRef } from "react";

const Trening = () => {
  const grid1 = useRef(null);
  const grid2 = useRef(null);

  useEffect(() => {
    sr.reveal([grid1.current, grid2.current], {
      duration: 1000,
      delay: 50,
      distance: "100px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
  }, []);

  return (
    <>
      <section
        id="trening"
        className="bg-slate-200 relative  overflow-hidden pb-32"
      >
        <div className="p-8">
          <h2 className="text-5xl font-oswald mb-10">Trening</h2>
          <span className="absolute px-4 sm:py-2 sm:px-6 bg-slate-300 border-2  border-red-500 rounded-xl text-xl sm:text-3xl font-oswald font-bold text-red_preh  xl2:top-[5rem] xl2:left-[50%]  xl2:rotate-[-35deg] xl:top-[3.5rem] xl:left-[40%] xl:rotate-[-25deg] md2:left-[70%]  md2:top-[80%] md2:rotate-[25deg] left-[50%] top-[4.5%] rotate-[-15deg]">
            Dolazi uskoro !!
          </span>
          <div className="">
            <h4 className="text-2xl font-oswald mb-4">
              Prijavite se na individualni trening ili na grupni trening
            </h4>
            <p className="text-xl mb-10">
              Uskoro u našoj ponudi nudit ćemo program individualnih treninga te
              grupnih treninga
            </p>
            <div
              className="flex flex-col gap-2 py-4 px-5 bg-red_preh_t rounded-t-xl"
              ref={grid1}
            >
              <h4 className="text-red-900 font-bold font-oswald text-2xl">
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
            <div
              className="flex flex-col gap-2 py-4 px-5 bg-slate-300 rounded-b-xl"
              ref={grid2}
            >
              <h4 className="text-black font-bold font-oswald text-2xl">
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
        <div className="hidden xl:block absolute rounded-[60%] overflow-hidden w-[50rem] top-[-8rem] right-[-28%] xxl:right-[-20%]">
          <img
            src="/images/Nikola/čečanj.jpg"
            alt="čučanj vježba"
            loading="lazy"
            width="512"
            height="640"
          />
        </div>
        <div className="absolute  xl:w-[30rem] bottom-[-13.5rem] left-[-8rem] md:left-[-23%] md2:left-[-19%] lg:left-[-8%]">
          <img
            src="/images/Nikola/leđnjak 1.png"
            alt="leđnjak vježba"
            className="bg-cover bg-center"
            loading="lazy"
            height="585"
            width="480"
          />
        </div>
        <button className="block mx-auto py-2 px-5 bg-red_preh rounded-xl text-xl font-oswald border-2 font-bold text-white hover:text-red_preh hover:bg-slate-100 hover:border-red_preh hover:border-2 transition-all duration-500 group">
          <a href="/kontakt" className="flex gap-2 items-center">
            Kontaktirajte nas{" "}
            <FaArrowRight className="transform transition-transform duration-500 group-hover:translate-x-2" />
          </a>
        </button>
      </section>
    </>
  );
};

export default Trening;
