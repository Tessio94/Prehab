import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { useEffect, useRef } from "react";

const Usluga = ({ usluga }) => {
  const { id, name, img, description, imageDesc } = usluga;
  const [active, setActive] = useState(false);

  //   const refs = [useRef(null), useRef(null), useRef(null)];

  return (
    <div className="border-black_preh shadow-black_preh/60 rounded-xl border-2 bg-slate-100 py-5 shadow-xl">
      <div className="relative flex items-center justify-center">
        <img src={img} alt={imageDesc} className="z-0 w-40" />
      </div>
      <h2 className="font-oswald mb-3 text-center text-[1.2rem] font-bold">
        {name}
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setActive(!active)}
          className={
            active
              ? `text-red_preh font-oswald lg:hover:bg-red_preh border-red_preh flex items-center justify-center gap-1 rounded-xl border-2 bg-slate-100 px-5 py-1 transition-all duration-500 lg:hover:text-slate-100`
              : `bg-red_preh font-oswald lg:hover:text-red_preh border-red_preh flex items-center justify-center gap-1 rounded-xl border-2 px-5 py-1 text-slate-100 transition-all duration-500 lg:hover:bg-slate-100`
          }
        >
          {active ? "Minimiziraj" : "Pogledaj više"}
          <span>
            <GoTriangleDown />
          </span>
        </button>
      </div>
      <p
        className={`font-oswald text-justify text-xl hyphens-auto transition-all duration-500 ${
          active
            ? "bg-black_preh border-black_preh relative z-10 w-full translate-y-0 rounded-b-xl border-2 px-5 py-3 text-white"
            : "translate translate-y-[-120%] opacity-0"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Usluga;
