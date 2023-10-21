import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const WelcomeBanner: React.FC = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="/src/Assets/pic3.jpeg"
            alt="Image 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="swiper-slide">
          <img
            src="/src/Assets/pic2.jpeg"
            alt="Image 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="swiper-slide">
          <img
            src="/src/Assets/pic1.jpeg"
            alt="Image 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="bg-blue-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tutoring App</h1>
          <p className="text-lg">
            Get the help you need for your studies. Join our community of
            student tutors!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
