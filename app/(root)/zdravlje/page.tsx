import Banner from "@/components/photo/Banner";
import Options from "@/components/photo/Options";
import Articles from "@/components/zdravlje/Articles";
import Intro from "@/components/zdravlje/Intro";
import MainArticle from "@/components/zdravlje/MainArticle";

const Page = () => {
  return (
    <>
      <Intro />
      <Options
        data={[
          { label: "Svi", tab: "t1" },
          { label: "Edukacija", tab: "t2" },
          { label: "Trening", tab: "t3" },
        ]}
      />
      <MainArticle />
      <Articles />
      <Banner color="#121a29" buttonColor="#c70808" headerColor="#c70808" />
    </>
  );
};

export default Page;
