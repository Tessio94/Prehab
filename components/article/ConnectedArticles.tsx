import { otherArticles } from "@/data/articles";
import Article from "../zdravlje/Article";

export default function ConnectedArticles({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const related = otherArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 2);
  return (
    <section
      aria-labelledby="related-heading"
      className="text-black_preh bg-slate-50 px-6 py-16 md:px-10 lg:px-26"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="related-heading"
          className="font-oswald mb-8 text-3xl font-medium"
        >
          Možda će vas zanimati i ovo
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
