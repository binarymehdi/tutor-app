import ModalVideo from 'react-modal-video';
import VideoThumb from '/public/images/hero-image.png';

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute bottom-0 w-full flex justify-center" aria-hidden="true">
        <div className="max-w-6xl w-full flex justify-center">
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="public/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
