import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../components/HeroSection";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Tutoring Services", href: "#tutoring" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
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
    </div>
  );
};

export default Home;
