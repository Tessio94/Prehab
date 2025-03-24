import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <Banner />
      <footer className="bg-black text-stone-50 p-4 py-8 flex flex-col justify-center items-center gap-3">
        <Link to="/" className="flex items-center gap-4 text-stone-100">
          <img
            src="/images/logo/ikona.png"
            alt="logo"
            className="w-20 h-20 rounded-xl shadow-2xl"
            height="80"
            width="80"
          />
          <h1 className="text-3xl font-bold font-oswald">Prehab</h1>
        </Link>
        <div className="sm:w-[26rem] sm:text-start text-center">
          <h3 className="sm:text-xl text-md font-oswald">
            <span className="sm:text-[1.5rem] text-[1rem] text-red_preh">
              Lokacija br. 1:
            </span>{" "}
            Splitska ulica 3, 23000 Zadar
          </h3>
        </div>
        <div className="sm:w-[26rem] sm:text-start text-center">
          <h3 className="sm:text-xl text-md font-oswald">
            <span className="sm:text-[1.5rem] text-[1rem] text-red_preh">
              Lokacija br. 2:
            </span>{" "}
            Bukovačka 15, 23210 Biograd na Moru
          </h3>
        </div>
        <a
          href="mailto:nikola.lukic.993@gmail.com"
          className="text-lg font-oswald mb-5 hover:text-stone-400 hover:scale-125 transition-all duration-500"
        >
          nikola.lukic.993@gmail.com
        </a>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/prehabilitationtherapycenter"
            target="_blank"
            className=" hover:text-stone-400 hover:scale-125 transition-all duration-500 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/prehabcentar/"
            target="_blank"
            className=" hover:text-stone-400 hover:scale-125 transition-all duration-500 text-2xl"
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
