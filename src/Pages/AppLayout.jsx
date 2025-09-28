import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const AppLayout = () => {
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

  return (
    <>
      <LoadingSpinner />
      <div
        className={
          location.pathname === "/"
            ? "relative h-screen shadow-2xl overflow-x-clip after:linear_shadow2 after:sm:linear_shadow after:bg-gradient-to-r from-black  after:absolute after:top-[7.5rem] after:left-0 after:w-[70%]  after:bg-opacity-50  after:z-0"
            : ""
        }
      >
        {location.pathname === "/" && (
          <div className="absolute inset-0">
            {/* Low-quality image */}
            <img
              srcSet="/images/Nikola/prehab_nikola1_low.webp 480w, /images/Nikola/prehab_nikolaxsm_low.webp 640w, /images/Nikola/prehab_nikolalg_low.webp 1280w, /images/Nikola/prehab_nikola_low.webp 1920w"
              sizes="(max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
              src="/images/Nikola/prehab_nikola_low.webp"
              width={2000}
              height={1334}
              alt="Nikola background"
              className="absolute inset-0 w-full h-full object-cover scale-105 blur-xl"
            />

            {/* High-quality image */}
            <img
              srcSet="/images/Nikola/prehab_nikola1.jpg 480w, /images/Nikola/prehab_nikola_xsm.jpg 640w, /images/Nikola/prehab_nikolalg.jpg 1280w, /images/Nikola/prehab_nikola.jpg 1920w"
              sizes="(max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
              src="/images/Nikola/prehab_nikola.jpg"
              width={2000}
              height={1334}
              alt="Nikola background high quality"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              fetchpriority="high"
              onLoad={() => setLoaded(true)}
            />
          </div>
        )}

        <Header />
        <Outlet context={{ usluge, suradnje }} />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
