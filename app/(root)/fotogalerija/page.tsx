import Grid from "@/components/photo/Grid";
import Intro from "@/components/photo/Intro";
import Options from "@/components/photo/Options";
import Banner from "@/components/photo/Banner";

const Page = () => {
  return (
    <>
      <Intro />
      <Options
        data={[
          { label: "Svi", tab: "t1" },
          { label: "Prostor", tab: "t2" },
          { label: "Terapije", tab: "t3" },
          { label: "Edukacija", tab: "t4" },
          { label: "Događaji", tab: "t5" },
        ]}
      />
      <Grid />
      <Banner />
    </>
  );
};

export default Page;
