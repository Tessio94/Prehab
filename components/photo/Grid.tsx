import Image from "next/image";

const Grid = () => {
  return (
    <section className="px-6 py-10 md:px-10 lg:px-16">
      <div className="px-10 max-md:px-0">
        <div className="grid auto-rows-[220px] grid-cols-12 items-stretch gap-4 rounded-2xl md:gap-6 xl:gap-8">
          <div className="col-span-6 row-span-2 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original1.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12!"></div>
          <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original2.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl bg-[url(/images/zadar/slika5.jpg)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original3.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original4.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-7 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original5.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original6.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6 max-lg:row-span-2"></div>
          <div className="col-span-5 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original7.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original8.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
          <div className="col-span-4 row-span-1 overflow-hidden rounded-2xl bg-[url(/images/resized/original/original9.png)] bg-cover bg-center bg-no-repeat max-[500px]:col-span-12! max-lg:col-span-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
