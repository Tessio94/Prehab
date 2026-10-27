import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allArticles, getArticle } from "@/data/articles";
import ConnectedArticles from "@/components/article/ConnectedArticles";
import Content from "@/components/article/Content";
import Cover from "@/components/article/Cover";
import HealthArticleContent from "@/components/article/HealthArticleContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `https://prehabilitationtherapycenter.hr/zdravlje/${article.slug}`;
  return {
    title: `${article.title} | Prehab Fizioterapija Zadar i Biograd`,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Prehab Zadar",
      type: "article",
      locale: "hr_HR",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <>
      {slug === "skolioza-kamp" ? (
        <>
          <Cover />
          <Content />
        </>
      ) : (
        <HealthArticleContent article={article} />
      )}
      <ConnectedArticles currentSlug={slug} />
    </>
  );
}
