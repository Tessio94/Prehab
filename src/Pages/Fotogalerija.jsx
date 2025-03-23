import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLocation } from "react-router-dom";
import metadata from "../data/metaData";
import { Helmet } from "react-helmet-async";

const Fotogalerija = () => {
  const location = useLocation();
  const meta = metadata[location.pathname];

  const images = [
    {
      original: "/images/resized/original/original1.png",
      thumbnail: "/images/resized/thumbnail/thumbnail1.png",
      loading: "eager",
      thumbnailLoading: "eager",
      originalAlt: "prehab prostor",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original2.png",
      thumbnail: "/images/resized/thumbnail/thumbnail2.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab prostor",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original3.png",
      thumbnail: "/images/resized/thumbnail/thumbnail3.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab prostor",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original4.png",
      thumbnail: "/images/resized/thumbnail/thumbnail4.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab prostor",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original5.png",
      thumbnail: "/images/resized/thumbnail/thumbnail5.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab uteg",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original6.png",
      thumbnail: "/images/resized/thumbnail/thumbnail6.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab masaža",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original7.png",
      thumbnail: "/images/resized/thumbnail/thumbnail7.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab prostor",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original8.png",
      thumbnail: "/images/resized/thumbnail/thumbnail8.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab uteg",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original9.png",
      thumbnail: "/images/resized/thumbnail/thumbnail9.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab diplome",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original10.png",
      thumbnail: "/images/resized/thumbnail/thumbnail10.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab diplome",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
    {
      original: "/images/resized/original/original11.png",
      thumbnail: "/images/resized/thumbnail/thumbnail11.png",
      loading: "lazy",
      thumbnailLoading: "lazy",
      originalAlt: "prehab diplome",
      thumbnailAlt: "prehab prostor sličica",
      originalHeight: 1000,
      originalWidth: 1920,
    },
  ];

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
      <section
        id="fotogalerija"
        className="preh-background px-[2rem] sm:px-[1rem] lg:px-[0rem]"
      >
        <h1 className="text-6xl font-oswald pt-[5rem] mb-10 text-center">
          Fotogalerija
        </h1>
        <ImageGallery items={images} />
      </section>
    </>
  );
};

export default Fotogalerija;
