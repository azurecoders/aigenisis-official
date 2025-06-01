import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      {/* <Work /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Models />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}
