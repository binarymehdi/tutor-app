import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const images: string[] = [
  "/src/Assets/pic1.jpeg",
  "/src/Assets/pic2.jpeg",
  "/src/Assets/pic3.jpeg",
  "/src/Assets/pic4.jpeg",
];

const WelcomeBanner: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
    }

    swiperRef.current = new Swiper(".swiper-container", {
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
    });

    swiperRef.current.on("slideChange", () => {
      setCurrentImageIndex(swiperRef.current?.activeIndex || 0);
    });

    const autoSlide = () => {
      swiperRef.current?.slideNext();
      setTimeout(autoSlide, 6000);
    };

    autoSlide();

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="welcome-banner relative h-screen">
      <div className="swiper-container h-full">
        <div className="swiper-wrapper h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`swiper-slide ${
                index === currentImageIndex ? "active" : ""
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div className="static-text absolute top-0 left-0 h-full w-full flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="welcome-title text-3xl md:text-4xl lg:text-5xl mb-4">
            Empower Rural Education
          </h1>
          <p className="welcome-description text-lg md:text-xl lg:text-2xl">
            Join our mission to support countryside schools and inspire the
            next generation of learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
