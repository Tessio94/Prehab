import Banner from "@/components/photo/Banner";
import Options from "@/components/photo/Options";
import Articles from "@/components/zdravlje/Articles";
import Intro from "@/components/zdravlje/Intro";
import MainArticle from "@/components/zdravlje/MainArticle";

const Page = () => {
  return (
    <>
      <Intro />
      <Options />
      <MainArticle />
      <Articles />
      <Banner color="#121a29" buttonColor="#d23366" headerColor="#d23366" />
    </>
  );
};

export default Page;
