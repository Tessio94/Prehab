import { CgCheck } from "react-icons/cg";
import { FaQuoteLeft } from "react-icons/fa";

const Content = () => {
  return (
    <section>
      <div className="mx-auto flex w-full flex-col gap-8 xl:flex-row">
        <aside className="order-2 xl:sticky xl:top-[110px] xl:order-1 xl:max-h-[calc(100vh-110px)] xl:w-[240px] xl:self-start xl:overflow-y-auto xl:pb-20"></aside>
        <main className="order-3 flex flex-1 flex-col gap-8 py-10 xl:order-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 py-3">
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
            <div className="flex flex-col gap-5 py-3">
              <h4 className="font-oswald after:bg-red_preh relative text-2xl font-bold after:absolute after:top-[105%] after:left-0 after:h-1.5 after:w-10 after:rounded-xl">
                Što vas očekuje u kampu
              </h4>
              <ul className="mt-2 flex flex-col items-start gap-3">
                <li className="flex flex-row items-center gap-3">
                  <CgCheck className="text-red_preh font-inter text-2xl" />
                  <p>Individualizirane vježbe i terapije</p>
                </li>
                <li className="flex flex-row items-center gap-3">
                  <CgCheck className="text-red_preh font-inter text-2xl" />
                  <p>Individualizirane vježbe i terapije</p>
                </li>
                <li className="flex flex-row items-center gap-3">
                  <CgCheck className="text-red_preh font-inter text-2xl" />
                  <p>Individualizirane vježbe i terapije</p>
                </li>
                <li className="flex flex-row items-center gap-3">
                  <CgCheck className="text-red_preh font-inter text-2xl" />
                  <p>Individualizirane vježbe i terapije</p>
                </li>
                <li className="flex flex-row items-center gap-3">
                  <CgCheck className="text-red_preh font-inter text-2xl" />
                  <p>Individualizirane vježbe i terapije</p>
                </li>
              </ul>
              <div className="flex flex-row items-center justify-center rounded-xl bg-slate-100/80 px-20 py-5">
                <div className="flex flex-row items-start gap-7">
                  <FaQuoteLeft className="text-red_preh text-5xl" />
                  <p className="font-inter text-3xl">
                    Fokusirani smo na individualni pristup i stvaranje zdravih
                    navika koje možete ponijeti sa sobom kući.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="order-1 hidden xl:sticky xl:top-[110px] xl:order-3 xl:block xl:max-h-[calc(100vh-110px)] xl:w-[240px] xl:self-start xl:overflow-y-auto"></aside>
      </div>
    </section>
  );
};

export default Content;
