import { useState } from 'react';
import Image from 'next/image';
import ModalVideo from '@/components/modal-video';
import VideoMP4 from '@/public/videos/video.mp4';
import VideoThumb from '@/public/images/hero-image.png';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          {/* ... */}
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div>
            <Image src={VideoThumb} alt="Hero image" />
            {modalOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center">
                <video controls width={640} height={360} src={VideoMP4} onEnded={closeModal} />
              </div>
            )}
            <button onClick={openModal} className="bg-white text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-200 focus:outline-none">
              Open Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
