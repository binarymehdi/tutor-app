import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./WelcomeBanner.css";

const images = [
  "/src/Assets/pic1.jpeg",
  "/src/Assets/pic2.jpeg",
  "/src/Assets/pic3.jpeg",
  "/src/Assets/pic4.jpeg",
];

const WelcomeBanner: React.FC = () => {
  const swiperRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      loop: true,
      effect: "fade", // Use the fade effect
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
    });

    swiperRef.current.on("slideChange", () => {
      setCurrentImageIndex(swiperRef.current.activeIndex);
    });

    const autoSlide = () => {
      swiperRef.current.slideNext();
      setTimeout(autoSlide, 6000);
    };

    autoSlide();

    return () => {
      swiperRef.current.destroy(true, true);
    };
  }, []);

  return (
    <div className="welcome-banner" style={{ position: "relative" }}>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`swiper-slide ${
                index === currentImageIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div
        className="static-text"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      >
        <div className="container mx-auto text-white">
          <h1 className="welcome-title">Empower Rural Education</h1>
          <p className="welcome-description">
            Join our mission to support countryside schools and inspire the next
            generation of learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
