import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const location = useLocation();

  const [hambActive, setHambActive] = useState(false);

  const dropdown = useRef(null);
  const hamb = useRef(null);
  const header = useRef();
  const navbar = useRef(null);

  useEffect(() => {
    const handleHambClick = () => {
      setHambActive((prevState) => {
        const newState = !prevState;

        if (newState) {
          hamb.current.classList.add("open");
          dropdown.current.classList.remove("translate-x-[100%]");
        } else {
          hamb.current.classList.remove("open");
          dropdown.current.classList.add("translate-x-[100%]");
        }

        return newState;
      });
    };

    const currentHamb = hamb.current;
    currentHamb.addEventListener("click", handleHambClick);

    return () => {
      currentHamb.removeEventListener("click", handleHambClick);
    };
  }, [hambActive]);

  useEffect(() => {
    if (window.screen.width < 640) return;

    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY < 900) {
        navbar.current.classList.remove("relative");
        navbar.current.classList.add("fixed");
        navbar.current.classList.toggle("opacity-0", window.scrollY > 700);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      navbar.current.classList.remove("fixed");
      navbar.current.classList.add("relative");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className="relative w-full h-[7.5rem]" ref={header}>
      <div
        className="flex w-full relative justify-between items-center px-10 md:px-10 lg:px-16 py-5 bg-black bg-opacity-50 z-50 transition-all duration-500"
        ref={navbar}
      >
        <Link to="/" className="flex items-center gap-4 text-stone-100">
          <img
            src="/images/logo/ikona.png"
            alt="logo"
            className="w-20 h-20 rounded-xl shadow-2xl"
            height="80"
            width="80"
          />
          <h1 className="lg:text-3xl text-2xl font-bold font-oswald">Prehab</h1>
        </Link>

        <nav>
          <div
            id="nav-icon1"
            className="text-3xl  text-stone-100 sm:hidden z-50 relative cursor-pointer"
            ref={hamb}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className="z-10 fixed translate-x-[100%]  flex flex-col items-start justify-start gap-10  h-[100vh] top-[0rem] px-10  pb-5 pt-36 right-0 left-[50%] xsm:left-[50%]  rounded-bl-xl bg-slate-400 text-2xl sm:translate-x-0  sm:relative sm:top-0 sm:left-0 sm:h-fit  sm:text-base sm:bg-transparent sm:flex sm:flex-row sm:items-center sm:justify-between sm:p-0 sm:gap-6 md:text-lg lg:text-xl font-oswald transition-all duration-500"
            ref={dropdown}
          >
            <li>
              <NavLink
                to="/"
                className="relative hover:text-stone-400 text-stone-100 before:content-[''] before:absolute before:bottom-[-0.2rem] before:left-0 before:w-0 before:bg-stone-300 before:h-0.5 before:transition-all before:duration-500 hover:before:w-full transition-all duration-500"
              >
                Naslovnica
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/o-nama"
                className="relative hover:text-stone-400 text-stone-100 before:content-[''] before:absolute before:bottom-[-0.2rem] before:left-0 before:w-0 before:bg-stone-300 before:h-0.5 before:transition-all before:duration-500 hover:before:w-full transition-all duration-500"
              >
                O nama
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fotogalerija"
                className="relative hover:text-stone-400 text-stone-100 before:content-[''] before:absolute before:bottom-[-0.2rem] before:left-0 before:w-0 before:bg-stone-300 before:h-0.5 before:transition-all before:duration-500 hover:before:w-full transition-all duration-500"
              >
                Fotogalerija
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                className="relative hover:text-stone-400 text-stone-100 before:content-[''] before:absolute before:bottom-[-0.2rem] before:left-0 before:w-0 before:bg-stone-300 before:h-0.5 before:transition-all before:duration-500 hover:before:w-full transition-all duration-500"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex-col gap-3 justify-center items-center hidden md:flex">
          <div className="text-md text-stone-100">
            <a
              href="tel:+095 906 4240"
              className="text-stone-100 flex items-center gap-2"
            >
              <BsTelephone /> +095 906 4240
            </a>
          </div>
          <ul className="flex gap-3 text-md text-stone-100">
            <li className="cursor-pointer hover:text-stone-400 hover:scale-125 transition-all duration-500 text-xl">
              <a
                href="https://www.facebook.com/prehabilitationtherapycenter"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="cursor-pointer hover:text-stone-400 hover:scale-125 transition-all duration-500 text-xl">
              <a href="https://www.instagram.com/prehabcentar/" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
