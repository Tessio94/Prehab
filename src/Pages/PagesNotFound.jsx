import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { FaArrowLeft } from "react-icons/fa";

const PagesNotFound = () => {
  return (
    <div className="h-[511px] w-full">
      <div className="flex flex-col items-center pt-20 gap-16">
        <p className="font-serif text-4xl">
          <span className="text-red-600 font-bold">404</span> Stranica nije
          pronađena
        </p>
        <Button href="/" type="red">
          Naslovnica{" "}
          <FaArrowLeft className="transform transition-transform duration-500 group-hover:translate-x-[-3px]" />
        </Button>
      </div>
    </div>
  );
};

export default PagesNotFound;
