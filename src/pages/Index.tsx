import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Artists from "@/components/sections/Artists";
import Gallery from "@/components/sections/Gallery";
import Styles from "@/components/sections/Styles";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Booking from "@/components/sections/Booking";
import Contacts from "@/components/sections/Contacts";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Process from "@/components/sections/Process";
import Equipment from "@/components/sections/Equipment";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Featured from "@/components/sections/Featured";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Artists />
      <Featured />
      <Gallery />
      <Styles />
      <Services />
      <Pricing />
      <Process />
      <Equipment />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Booking />
      <Contacts />
    </>
  );
};

export default Index;
