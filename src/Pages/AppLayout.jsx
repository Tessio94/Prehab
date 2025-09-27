import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { preloadImages } from "../utils/preload";
import LoadingSpinner from "../components/LoadingSpinner";

const AppLayout = () => {
  const [bg, setBg] = useState("/public/images/Nikola/prehab Nikola1.jpg");

  const location = useLocation();

  const usluge = useRef(null);
  const suradnje = useRef(null);

  useEffect(() => {
    if (location.pathname !== "/") return;

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

  useEffect(() => {
    preloadImages();

    const handleResize = () => preloadImages();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  useLayoutEffect(() => {
    const updateBg = () => {
      const w = window.innerWidth;
      let path = "/public/images/Nikola/prehab Nikola1.jpg"; // default

      switch (true) {
        case w >= 1600:
          path = "/public/images/Nikola/prehab Nikola.jpg";
          break;
        case w >= 1280:
          path = "/public/images/Nikola/prehab Nikolaxl.jpg";
          break;
        case w >= 1024:
          path = "/public/images/Nikola/prehab Nikolalg.jpg";
          break;
        case w >= 768:
          path = "/public/images/Nikola/prehab Nikolamd.jpg";
          break;
        case w >= 640:
          path = "/public/images/Nikola/prehab Nikolasm.jpg";
          break;
        case w >= 450:
          path = "/public/images/Nikola/prehab Nikolaxsm.jpg";
          break;
        default:
          path = "/public/images/Nikola/prehab Nikola1.jpg";
      }

      setBg(path);
    };

    updateBg(); // run on mount
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <>
      <LoadingSpinner />
      <div
        className={
          location.pathname === "/"
            ? "relative h-screen  shadow-2xl after:linear_shadow2 after:sm:linear_shadow after:bg-gradient-to-r from-black  after:absolute after:top-[7.5rem] after:left-0 after:w-[70%]  after:bg-opacity-50  after:z-0 overflow-x-clip"
            : ""
        }
        style={
          location.pathname === "/"
            ? {
                backgroundImage: `url("${bg}")`,
                backgroundSize: "auto",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left top -10rem",
              }
            : {}
        }
      >
        <Header />
        <Outlet context={{ usluge, suradnje }} />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
