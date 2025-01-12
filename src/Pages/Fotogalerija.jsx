import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Fotogalerija = () => {
  const images = [
    {
      original: "/images/resized/original/original1.png",
      thumbnail: "/images/resized/thumbnail/thumbnail1.png",
    },
    {
      original: "/images/resized/original/original2.png",
      thumbnail: "/images/resized/thumbnail/thumbnail2.png",
    },
    {
      original: "/images/resized/original/original3.png",
      thumbnail: "/images/resized/thumbnail/thumbnail3.png",
    },
    {
      original: "/images/resized/original/original4.png",
      thumbnail: "/images/resized/thumbnail/thumbnail4.png",
    },
    {
      original: "/images/resized/original/original5.png",
      thumbnail: "/images/resized/thumbnail/thumbnail5.png",
    },
    {
      original: "/images/resized/original/original6.png",
      thumbnail: "/images/resized/thumbnail/thumbnail6.png",
    },
    {
      original: "/images/resized/original/original7.png",
      thumbnail: "/images/resized/thumbnail/thumbnail7.png",
    },
    {
      original: "/images/resized/original/original8.png",
      thumbnail: "/images/resized/thumbnail/thumbnail8.png",
    },
    {
      original: "/images/resized/original/original9.png",
      thumbnail: "/images/resized/thumbnail/thumbnail9.png",
    },
    {
      original: "/images/resized/original/original10.png",
      thumbnail: "/images/resized/thumbnail/thumbnail10.png",
    },
    {
      original: "/images/resized/original/original11.png",
      thumbnail: "/images/resized/thumbnail/thumbnail11.png",
    },
  ];

  return (
    <section
      id="fotogalerija"
      className="preh-background px-[2rem] sm:px-[1rem] lg:px-[0rem]"
    >
      <h1 className="text-6xl font-oswald pt-[5rem] mb-10 text-center">
        Fotogalerija
      </h1>
      <ImageGallery items={images} />;
    </section>
  );
};

export default Fotogalerija;
