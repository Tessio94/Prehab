import Image from "next/image";
import Article from "../zdravlje/Article";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const ConnectedArticles = () => {
  return (
    <section>
      <div className="max-lg: flex flex-col items-stretch gap-16 bg-slate-100/80 px-6 py-16 md:px-10 lg:flex-row lg:items-start lg:px-16">
        <div className="flex px-10 max-md:px-0">
          <div>
            <p className="text-black_preh mb-10 text-3xl font-semibold">
              Možda će vas zanimati i ovo
            </p>
            <div className="relative z-0 grid w-fit grid-cols-1 items-stretch gap-10 rounded-2xl lg:grid-cols-2 2xl:grid-cols-3">
              <Article />
              <Article />
              <Article />
            </div>
          </div>
        </div>
        <div className="bg-red_preh_t flex shrink-0 flex-col items-center justify-between gap-5 rounded-xl px-15 py-5">
          <p className="text-red_preh text-2xl font-semibold">Autor članka</p>
          <div className="overflow-hidden rounded-full border-2 border-slate-100 bg-slate-100/80">
            <Image
              src="/images/animacija/pocetna.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <strong className="text-2xl">Nikola Lukić</strong>
          <p className="text-xl">Diplomirani fizioterapeut</p>
          <div className="flex flex-row items-center gap-3">
            <FaFacebook className="text-3xl" />
            <FaInstagram className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedArticles;
