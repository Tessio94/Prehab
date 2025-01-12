import Button from "../shared/Button";
import { FaArrowDown } from "react-icons/fa6";

const Certifikati = () => {
  return (
    <section id="obrazovanje" className="preh-background">
      <div className="flex justify-center items-start p-8 w-[85%] m-auto gap-10">
        <div className="basis-1/2 rounded-xl overflow-hidden">
          <img src="/images/certifikati/slika 7.jpg" alt="" />
        </div>
        <div className="basis-1/2 flex flex-col gap-5 p-5">
          <h2 className="text-3xl font-oswald">Obrazovanje i prakse:</h2>
          <p className="text-xl font-oswald">
            Ova stranica je vam pruzila informacije o prehabilitaciji
            institutatima i klinicama.
          </p>
          <a href="#suradnje">
            <Button type="blue">
              Suradnje <FaArrowDown />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifikati;
