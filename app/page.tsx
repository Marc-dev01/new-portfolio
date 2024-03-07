import About from "./ui/about/About";
import Banner from "./ui/banner/Banner";
import Certificate from "./ui/certificate/Certificate";
import Contact from "./ui/contact/Contact";
import Footer from "./ui/footer/Footer";
import Header from "./ui/header/Header";
import Interet from "./ui/interet/Interet";
import Projects from "./ui/projects/Projects";
import Testimonial from "./ui/testimonial/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <About />
      <Interet />
      <Projects />
      <Certificate />
      <Contact />
      <Testimonial />
      <Footer />
    </main>
  );
}
