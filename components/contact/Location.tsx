"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Location = () => {
  const [lokacija, setLokacija] = useState(true);

  return (
    <div className="custom_grid mb-10 px-10 py-5">
      <div className="flex flex-col items-start justify-center px-4 py-5">
        <h3 className="font-oswald text-red_preh mb-3 text-3xl font-bold">
          Potražite nas na mapi
        </h3>
        <div className="mb-5">
          <h4 className="font-oswald after:bg-red_preh relative mb-3 text-2xl after:absolute after:top-full after:left-0 after:h-1 after:w-10 after:rounded-2xl">
            Lokacija br. 1:
          </h4>
          <p className="mb-5 text-xl">
            Nalazimo se na Zatvorenom bazenskom plivalištu u Zadru, na adresi{" "}
            <FaArrowRight className="mx-2 inline" />
            <strong
              className="inline cursor-pointer font-bold text-blue-600 underline hover:text-blue-400 hover:transition-all hover:duration-300"
              onClick={() => setLokacija(true)}
            >
              Splitska ulica 3
            </strong>
          </p>
        </div>
        <div className="mb-5">
          <h4 className="font-oswald after:bg-red_preh relative mb-3 text-2xl after:absolute after:top-full after:left-0 after:h-1 after:w-10 after:rounded-2xl">
            Lokacija br. 2:
          </h4>
          <p className="mb-5 text-xl">
            Nalazimo se na Zatvorenom bazenskom plivalištu u Zadru, na adresi{" "}
            <FaArrowRight className="mx-2 inline" />
            <strong
              className="inline cursor-pointer font-bold text-blue-600 underline hover:text-blue-400 hover:transition-all hover:duration-300"
              onClick={() => setLokacija(false)}
            >
              Bukovačka 15, BnM
            </strong>
          </p>
        </div>
      </div>
      <div className="my-auto">
        {lokacija ? (
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8328217605076!2d15.242970576714763!3d44.11955357108381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa7e16fc9e65%3A0xbb1632ed4f13abff!2sSplitska%20ul.%203%2C%2023000%2C%20Zadar!5e1!3m2!1shr!2shr!4v1720116102308!5m2!1shr!2shr"
            style={{ border: 0, width: "100%", height: "20rem" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4944485561277!2d15.454846076707327!3d43.951095671089725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761df789b15a309%3A0x459b8099f8ebd0ef!2sBukova%C4%8Dka%2015%2C%2023210%2C%20Biograd%20na%20Moru!5e1!3m2!1shr!2shr!4v1720116049751!5m2!1shr!2shr"
            style={{ border: 0, width: "100%", height: "20rem" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Location;
