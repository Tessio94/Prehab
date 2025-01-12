import Main from "../components/Main";
import Quote from "../components/Quote";
import HomeIntro from "../components/Certifikati";

const Home = () => {
  return (
    <div className="relative h-screen bg-auto bg-no-repeat bg-left_top bg-Nikola shadow-2xl after:linear_shadow after:bg-gradient-to-r from-black  after:absolute after:top-[7.5rem] after:left-0 after:w-[70%]  after:bg-opacity-50  after:z-0">
      <Main />
      <Quote />
      <HomeIntro />
    </div>
  );
};

export default Home;
