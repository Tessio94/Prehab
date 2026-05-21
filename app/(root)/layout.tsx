import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localBusinessSchema } from "@/lib/schema/localBusiness";

const Home = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Home;
