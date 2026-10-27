import { otherArticles } from "@/data/articles";
import Article from "./Article";

export default function Articles() {
  return (
    <section
      aria-labelledby="articles-heading"
      className="px-6 py-14 md:px-10 lg:px-26"
    >
      <h2
        id="articles-heading"
        className="font-oswald mb-8 text-3xl font-semibold"
      >
        Svi članci
      </h2>
      <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {otherArticles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
