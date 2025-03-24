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
import metadata from "../data/metaData";
import { Helmet } from "react-helmet-async";
import { preloadImages } from "../utils/preload";

const AppLayout = () => {
  const location = useLocation();

  const meta = metadata[location.pathname];

  const [showScrollToTop, setShowScrollToTop] = useState(false);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  useEffect(() => {
    preloadImages();

    const handleResize = () => preloadImages();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  if (location.pathname === "/") {
    return (
      <>
        <Helmet>
          <title>{meta.title || "Prehab Zadar"}</title>
          <meta
            property="og:image"
            content="https://prehabilitationtherapycenter.hr/images/Nikola/prehab nikola.jpg"
          ></meta>
          <meta
            name="description"
            content={
              meta.description ||
              "Dobrodošli u fizioterapeutsku kliniku Prehab Zadar."
            }
          />
          <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Prehabilitation Therapy Center Zadar",
          "alternateName": "Prehab Zadar",
          "url": "https://prehabilitationtherapycenter.hr/",
          "logo": "https://prehabilitationtherapycenter.hr/images/logo/ikona.png",
          "image": "https://prehabilitationtherapycenter.hr/images/Nikola/prehab nikola.jpg"
        }
        `}
          </script>
        </Helmet>
        <div className="relative h-screen bg-auto bg-fixed bg-no-repeat bg-left_top bg-Nikola1 xsm:bg-Nikolaxsm  sm:bg-Nikolasm md:bg-Nikolamd lg:bg-Nikolalg xl:bg-Nikolaxl xxl:bg-Nikola shadow-2xl after:linear_shadow2 after:sm:linear_shadow after:bg-gradient-to-r from-black  after:absolute after:top-[7.5rem] after:left-0 after:w-[70%]  after:bg-opacity-50  after:z-0">
          {showScrollToTop && (
            <div
              onClick={scrollToTop}
              className="fixed bottom-5 right-2 h-[3rem] w-[3rem] bg-red_preh bg-opacity-35 p-3 flex items-center justify-center cursor-pointer rounded-xl z-50"
            >
              <FaArrowUp className="text-5xl text-red_preh" />
            </div>
          )}
          <Header />
          <Main />
          <Quote />
          <HomeProfile />
          <Intro />
          <Usluge usluge={usluge} />
          <Trening />
          <Suradnje suradnje={suradnje} />
          <Footer />
        </div>
      </>
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
