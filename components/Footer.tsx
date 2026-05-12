import { FaFacebook, FaInstagram } from "react-icons/fa";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <Banner />
      <footer className="bg-black_preh flex flex-col items-center justify-center gap-3 p-4 py-8 text-stone-50">
        <Link href="/" className="flex items-center gap-4 text-stone-100">
          <img
            src="/images/logo/ikona.png"
            alt="logo"
            className="h-20 w-20 rounded-xl shadow-2xl"
            height="80"
            width="80"
          />
          <h1 className="font-oswald text-3xl font-bold">Prehab</h1>
        </Link>
        <div className="text-center sm:w-[26rem] sm:text-start">
          <h3 className="text-md font-oswald sm:text-xl">
            <span className="text-red_preh text-[1rem] sm:text-[1.5rem]">
              Lokacija br. 1:
            </span>{" "}
            Splitska ulica 3, 23000 Zadar
          </h3>
        </div>
        <div className="text-center sm:w-[26rem] sm:text-start">
          <h3 className="text-md font-oswald sm:text-xl">
            <span className="text-red_preh text-[1rem] sm:text-[1.5rem]">
              Lokacija br. 2:
            </span>{" "}
            Bukovačka 15, 23210 Biograd na Moru
          </h3>
        </div>
        <a
          href="mailto:nikola.lukic.993@gmail.com"
          className="font-oswald mb-5 text-lg transition-all duration-500 hover:scale-125 hover:text-stone-400"
        >
          nikola.lukic.993@gmail.com
        </a>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/prehabilitationtherapycenter"
            target="_blank"
            className="text-2xl transition-all duration-500 hover:scale-125 hover:text-stone-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/prehabcentar/"
            target="_blank"
            className="text-2xl transition-all duration-500 hover:scale-125 hover:text-stone-400"
          >
            <FaInstagram />
          </a>
        </div>
        <hr className="w-full text-white" />
        <p>
          © {date} <i>Tessio94</i>
        </p>
      </footer>
    </>
  );
};

export default Footer;
