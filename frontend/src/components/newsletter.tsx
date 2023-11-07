import React from 'react';

function Newsletter() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-8 sm:pb-12 md:pb-20">
          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-8 sm:py-10 px-6 sm:px-8 md:py-12 md:px-10 shadow-lg overflow-hidden" data-aos="zoom-y-out">
            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                {/* ... Background SVG content ... */}
              </svg>
            </div>
            <div className="max-w-3xl mx-auto lg:flex lg:justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl mb-4 lg:mb-0">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">Want more tutorials & guides?</h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
              </div>
              {/* CTA form */}
              <form className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                  <input
                    type="email"
                    className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-3 sm:mb-0 sm:mr-2 text-white placeholder-gray-500 text-sm"
                    placeholder="Your email..."
                    aria-label="Your email..."
                  />
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 shadow-md px-6 py-3 rounded-sm text-sm" type="submit">
                    Subscribe
                  </button>
                </div>
                {/* Success message */}
                <p className="text-xs text-gray-400 mt-2 text-center lg:text-left">No spam. You can unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
