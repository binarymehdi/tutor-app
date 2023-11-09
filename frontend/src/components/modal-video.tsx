import { useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div>
      {/* Video thumbnail */}
      <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay={450}>
        <div className="flex flex-col justify-center">
          <img src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
          <svg
            className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
            width="768"
            height="432"
            viewBox="0 0 768 432"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {/* Your SVG content */}
          </svg>
        </div>
        <button
          className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
          onClick={() => setModalOpen(true)}
        >
          <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <video controls width={videoWidth} height={videoHeight} ref={videoRef}>
              <source src={video} type="video/mp4" />
            </video>
          </svg>
          <span className="ml-3">Watch the full video (2 min)</span>
        </button>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen}>
        {(ref) => (
          <Dialog as="div" initialFocus={videoRef} onClose={() => setModalOpen(false)} ref={ref}>
            {/* Modal backdrop */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-out duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-[99999] bg-black bg-opacity-75" aria-hidden="true" />
            </Transition.Child>
            {/* End: Modal backdrop */}

            {/* Modal dialog */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-out duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6">
                <div className="max-w-6xl mx-auto h-full flex items-center">
                  <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                    <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
            {/* End: Modal dialog */}
          </Dialog>
        )}
      </Transition>
    </div>
  );
}
