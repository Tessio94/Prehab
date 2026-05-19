import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
