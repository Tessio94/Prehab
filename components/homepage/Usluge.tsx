import data from "@/data/data.js";
import Usluga from "./Usluga";

const Usluge = () => {
  return (
    <section id="usluge" className="mb-12">
      <div className="p-8">
        <h1 className="font-oswald mb-10 text-5xl">Usluge</h1>
        <div className="custom_grid2 auto-rows-[17rem]">
          {data.map((usluga) => {
            return <Usluga usluga={usluga} key={usluga.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Usluge;
