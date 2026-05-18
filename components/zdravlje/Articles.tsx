import { GrArticle } from "react-icons/gr";
import Article from "./Article";

const Articles = () => {
  return (
    <section className="py-10 md:px-20 lg:px-16">
      <div className="px-10">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="mb-5 flex flex-row items-center gap-5">
            <GrArticle className="text-red_preh text-5xl" />
            <h5 className="font-oswald text-3xl font-semibold">Svi članci</h5>
          </div>
          <div></div>
        </div>
        <div className="relative z-0 grid w-fit items-stretch gap-10 rounded-2xl sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
};

export default Articles;
