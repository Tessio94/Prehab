import data from "@/data/data.js";
import Usluga from "./Usluga";

const Usluge = () => {
  return (
    <section id="usluge" className="py-16 md:px-10 lg:px-16">
      <div className="p-10">
        <h1 className="font-oswald text-red_preh mb-10 text-5xl">Usluge</h1>
        <div className="grid auto-rows-[17rem] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((usluga) => {
            return <Usluga usluga={usluga} key={usluga.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Usluge;
