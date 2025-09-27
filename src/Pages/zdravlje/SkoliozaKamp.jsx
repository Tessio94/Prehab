import Button from "../../shared/Button";
import { GoMail, GoTriangleDown } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaWhatsapp } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import metadata from "../../data/metaData";

const SkoliozaKamp = () => {
  const location = useLocation();
  const meta = metadata[location.pathname];

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
      <section className="relative min-h-screen font-oswald" id="clanak-top">
        <div className="flex px-4 sm:px-20 py-20 max-lg:flex-col max-lg:gap-16">
          <div className="basis-1/2 text-2xl py-2 lg:px-3">
            <h3 className="text-red_preh font-semibold text-3xl underline mb-5">
              Skolioza kamp Biograd - 2025.
            </h3>
            <div className="flex flex-col gap-10">
              <p>
                Uz stručno vodstvo, vježbe prilagođene vašim potrebama i
                prekrasan ambijent mora, ovo je savršena prilika za rad na sebi,
                druženje i edukaciju.
              </p>
              <p>
                Gdje? <span className="text-red_preh">Biograd na Moru</span>
              </p>
              <p>
                Kada? <span className="text-red_preh">Lipanj 2025 godine</span>
              </p>
              <div className="flex flex-col gap-2">
                <p>Za više informacija obratite se:</p>
                <a
                  href="https://ridesanum.hr/"
                  target="_blank"
                  className="flex gap-3 items-center"
                >
                  <GoMail className="mt-[8px]" />
                  www.rideasanum.hr
                </a>
                <div className="flex items-center gap-3">
                  <FaWhatsapp />
                  <div>
                    <span>Ridesanum | </span>
                    <a href="tel:+385919355858">091/9355-858</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp />
                  <div>
                    <span>Balboa Gym | </span>
                    <a href="tel:+385994099033">099/4099-033</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp />
                  <div>
                    <span>Prehab Centar | </span>
                    <a href="tel:+385959064240">095/9064-240</a>
                  </div>
                </div>
              </div>
              <p className="bg-slate-500 text-white rounded-2xl py-2 px-5 w-fit">
                #ScoliosisKamp #Skolioza #Zdravlje #Vježbanje #BiogradNaMoru
                #ZajednoSmoJači
              </p>
              <Button type="red" href="#tekst">
                Pročitajte više <GoTriangleDown />
              </Button>
            </div>
          </div>
          <div className="lg:max-w-[50%] basis-1/2 py-2 lg:px-3">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img
                  src="/images/novosti/skolioza_letak1.jpg"
                  alt="Slide 1"
                  className="object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src="/images/novosti/skolioza_letak2.jpg"
                  alt="Slide 1"
                  className="object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          id="tekst"
          className="bg-slate-100 px-4 py-20 rounded-xl shadow-lg font-oswald text-xl lg:text-2xl text-justify text-gray-800 leading-relaxed space-y-5"
        >
          <p>
            <strong className="text-red_preh">Skolioza</strong> je posturalna
            deformacija kralježnice koja često uzrokuje bolove, loše držanje i
            smanjenu funkcionalnost tijela. Naš cilj je pružiti cjelovitu
            podršku svima koji se bore s ovim izazovom kroz znanje, pokret i
            zajedništvo.
          </p>
          <p>
            U sklopu{" "}
            <strong className="text-red_preh font-semibold">
              7-dnevnog Scoliosis Kampa
            </strong>{" "}
            u Biogradu na Moru, okupljamo stručnjake iz područja manualne
            terapije, kineziologije i rehabilitacije kako bismo vam pomogli
            razumjeti i korigirati skoliozu. Kamp nudi personalizirane vježbe,
            edukaciju i savjete, a sve to uz predivno more i pozitivnu
            atmosferu.
          </p>
          <p>
            Fokusirani smo na{" "}
            <span className="text-red_preh font-semibold">
              individualizirani pristup
            </span>{" "}
            i stvaranje održivih navika koje možete ponijeti sa sobom kući.
            Pridružite nam se i učinite prvi korak prema zdravijem i
            funkcionalnijem tijelu!
          </p>
          <p className="text-center font-bold text-red_preh">
            Rezervirajte svoje mjesto već danas – broj mjesta je ograničen!
          </p>
        </div>
      </section>
    </>
  );
};

export default SkoliozaKamp;
