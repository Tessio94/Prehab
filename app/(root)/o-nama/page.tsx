import Banner from "@/components/about/Banner";
import Description from "@/components/about/Description";
import Intro from "@/components/about/Intro";
import Reviews from "@/components/about/Reviews";
import Steps from "@/components/about/Steps";

const Page = () => {
  return (
    <>
      <Intro />
      <Description />
      <Banner />
      <Steps />
      <Reviews />
    </>
  );
};

export default Page;
