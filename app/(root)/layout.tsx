import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const HOME_OVERLAY_CLASSES =
//   "relative h-screen overflow-x-clip shadow-2xl after:absolute after:left-0 after:top-0 after:z-0 after:h-screen after:w-[70%] after:bg-gradient-to-r after:from-black after:bg-opacity-50";

const Home = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main className="relative">{children}</main>

      <Footer />
    </>
  );
};

export default Home;
