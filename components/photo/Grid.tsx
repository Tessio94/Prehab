"use client";

import useFancybox from "@/lib/hooks/useFancybox";
import { FaExpand } from "react-icons/fa";

const Grid = () => {
  const [fancyboxRef] = useFancybox();

  return (
    <section className="px-6 py-10 md:px-10 lg:px-16">
      <div className="px-10 max-md:px-0">
        <div
          className="grid auto-rows-[220px] grid-cols-12 items-stretch gap-4 rounded-2xl md:gap-6 xl:gap-8"
          ref={fancyboxRef}
        >
          <div className="group col-span-6 row-span-2 overflow-hidden rounded-2xl max-[500px]:col-span-12!">
            <a
              href="/images/resized/original/original1.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original1.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-3 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original2.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original2.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-3 row-span-2 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/zadar/slika5.jpg"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/zadar/slika5.jpg)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-3 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original3.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original3.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-2 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original4.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original4.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-7 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original5.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original5.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-3 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6 max-lg:row-span-2">
            <a
              href="/images/resized/original/original6.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original6.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-5 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original7.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original7.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-3 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original8.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original8.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
          <div className="group col-span-4 row-span-1 overflow-hidden rounded-2xl max-[500px]:col-span-12! max-lg:col-span-6">
            <a
              href="/images/resized/original/original9.png"
              data-fancybox="gallery"
              data-caption="Prehab prostor"
              className="inline-block h-full w-full bg-[url(/images/resized/original/original9.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
            >
              <div className="bg-black_preh/30 flex h-full w-full flex-row items-center justify-center opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
                <FaExpand className="cursor-pointer text-5xl text-slate-100 opacity-100 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
