import { campArticle } from "@/data/articles";
import ArticleHeader from "./ArticleHeader";

export default function Cover() {
  return (
    <ArticleHeader
      article={campArticle}
      image="/images/skolioza.png"
      description="Stručno vodstvo, vježbe prilagođene vašim potrebama i prekrasan ambijent mora, sve je savršena prilika za rad na sebi, druženje i edukaciju."
      date={{ value: "2025-05-15", label: "15.05.2025." }}
      location="Biograd na Moru"
    />
  );
}
