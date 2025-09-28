import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
// import { preloadImages } from "../utils/preload";

const AppLayout = () => {
  const [bg, setBg] = useState("/images/Nikola/prehab Nikola1.jpg");
  const [bgSmall, setBgSmall] = useState(
    "/images/Nikola/prehab Nikola1_low.webp"
  );
  const [loaded, setLoaded] = useState(false);

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

  //   useEffect(() => {
  //     preloadImages();

  //     const handleResize = () => preloadImages();
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize); // Cleanup
  //     };
  //   }, []);

  useEffect(() => {
    const img = new Image();

    const updateBg = () => {
      const w = window.innerWidth;
      let path = "/images/Nikola/prehab Nikola1.jpg";
      let pathLow = "/images/Nikola/prehab Nikola1_low.webp";

      switch (true) {
        case w >= 1600:
          path = "/images/Nikola/prehab Nikola.jpg";
          pathLow = "/images/Nikola/prehab Nikola_low.webp";
          break;
        case w >= 1280:
          path = "/images/Nikola/prehab Nikolaxl.jpg";
          pathLow = "/images/Nikola/prehab Nikolaxl_low.webp";
          break;
        case w >= 1024:
          path = "/images/Nikola/prehab Nikolalg.jpg";
          pathLow = "/images/Nikola/prehab Nikolalg_low.webp";
          break;
        case w >= 768:
          path = "/images/Nikola/prehab Nikolamd.jpg";
          pathLow = "/images/Nikola/prehab Nikolamd_low.webp";
          break;
        case w >= 640:
          path = "/images/Nikola/prehab Nikolasm.jpg";
          pathLow = "/images/Nikola/prehab Nikolasm_low.webp";
          break;
        case w >= 450:
          path = "/images/Nikola/prehab Nikolaxsm.jpg";
          pathLow = "/images/Nikola/prehab Nikolaxsm_low.webp";
          break;
        default:
          path = "/images/Nikola/prehab Nikola1.jpg";
          pathLow = "/images/Nikola/prehab Nikola1_low.webp";
      }

      setLoaded(false);
      setBgSmall(pathLow);

      img.src = path;
      img.onload = () => {
        setBg(path);
        setLoaded(true);
      };
    };

    updateBg();

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
                backgroundImage: `url("${bgSmall}")`,
                backgroundSize: "auto",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left top -10rem",
              }
            : {}
        }
      >
        {location.pathname === "/" && (
          <div
            className="absolute inset-0 bg-center bg-cover transition-opacity duration-700"
            style={{
              backgroundImage: `url("${bg}")`,
              backgroundSize: "auto",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top -10rem",
              opacity: loaded ? 1 : 0,
            }}
          ></div>
        )}
        <Header />
        <Outlet context={{ usluge, suradnje }} />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
