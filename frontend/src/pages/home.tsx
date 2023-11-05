import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../components/HeroSection";
import Features from "../components/features";
import FeaturesBlocks from "../components/features-blocks";
import Hero from "../components/hero";
import ModalVideo from "../components/modal-video";

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
      <Features />
      <FeaturesBlocks />
    </div>
  );
};

export default Home;
