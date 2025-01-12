import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Quote from "../components/Quote";
import HomeProfile from "../components/HomeProfile";
import Usluge from "../components/Usluge";
import Trening from "../components/Trening";
import Suradnje from "../components/Suradnje";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const AppLayout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  // console.log(location.hash);
  const usluge = useRef(null);
  const suradnje = useRef(null);

  const header = useRef();

  useEffect(() => {
    if (location.pathname !== "/") return;
    console.log(location.hash);
    console.log(usluge.current.offsetTop);

    const scrollTo = () => {
      if (location.hash === "#usluge") {
        window.scrollTo({
          top: usluge.current.offsetTop - 100,
          behavior: "smooth",
        });
      } else if (location.hash === "#suradnje") {
        window.scrollTo({
          top: suradnje.current.offsetTop - 100,
          behavior: "smooth",
        });
      }
    };
    scrollTo();
  }, [location, location.hash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.screen.width < 640) return;
    let header = document.querySelector("header");
    if (location.pathname === "/") {
      window.onscroll = () => {
        console.log(window.scrollY);

        // sticky navbar
        header.classList.remove("relative");
        header.classList.add("fixed");
        header.classList.toggle("opacity-0", window.scrollY > 700);
        header.classList.toggle("hidden", window.scrollY > 900);
      };
    } else {
      header.classList.remove("fixed");
      header.classList.add("relative");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname === "/") {
    return (
      <div className="relative h-[1080px] sm:h-screen bg-auto bg-fixed bg-no-repeat bg-left_top bg-Nikola1 xsm:bg-Nikolaxsm  sm:bg-Nikolasm md:bg-Nikolamd lg:bg-Nikolalg xl:bg-Nikolaxl xxl:bg-Nikola shadow-2xl after:linear_shadow2 after:sm:linear_shadow after:bg-gradient-to-r from-black  after:absolute after:top-[7.5rem] after:left-0 after:w-[70%]  after:bg-opacity-50  after:z-0">
        {showScrollToTop && (
          <div
            onClick={scrollToTop}
            className="fixed bottom-5 right-2 h-[3rem] w-[3rem] bg-red_preh bg-opacity-35 p-3 flex items-center justify-center cursor-pointer rounded-xl z-50"
          >
            <FaArrowUp className="text-5xl text-red_preh" />
          </div>
        )}
        <Header header={header} />
        <Main />
        <Quote />
        <HomeProfile />
        <Intro />
        <Usluge usluge={usluge} />
        <Trening />
        <Suradnje suradnje={suradnje} />
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
