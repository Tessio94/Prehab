import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
// import Button from "@/components/shared/Button";

const Trening = () => {
  return (
    <>
      <section
        id="trening"
        className="relative overflow-hidden py-16 md:px-10 lg:px-16"
      >
        <div className="p-10">
          <h2 className="font-oswald text-red_preh mb-10 text-5xl">Trening</h2>

          <div className="">
            <h4 className="font-oswald mb-4 text-2xl">
              Prijavite se na individualni trening ili na grupni trening
            </h4>
            <p className="mb-10 text-xl">
              Uskoro u našoj ponudi nudit ćemo program individualnih treninga te
              grupnih treninga
            </p>
            <div className="bg-red_preh_t flex flex-col gap-2 rounded-t-xl px-5 py-4">
              <h4 className="font-oswald text-black_preh text-red_preh text-2xl font-bold">
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
              <h4 className="font-oswald text-black_preh text-2xl font-bold">
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
          <Image
            src="/images/Nikola/čečanj.jpg"
            alt="čučanj vježba"
            loading="lazy"
            width={512}
            height={640}
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
