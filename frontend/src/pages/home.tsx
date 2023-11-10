import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../components/HeroSection";
import Features from "../components/features";
import FeaturesBlocks from "../components/features-blocks";
import Newsletter from "../components/newsletter";
import Testimonials from "../components/testimonials";
import ModalVideo from "../components/modal-video";
import Hero from "../components/hero";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tutoring Services", href: "/tutoring" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroSection />
      <ModalVideo thumb={""} thumbWidth={0} thumbHeight={0} thumbAlt={""} video={""} videoWidth={0} videoHeight={0} />
      <Hero />
      <Features />
      <Testimonials />
      <FeaturesBlocks />
      <Newsletter />
    </div>
  );
};

export default Home;