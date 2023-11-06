function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none lg:hidden -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Trusted by over 20,000 companies all over the world</h2>
            <p className="text-lg text-gray-600" data-aos="zoom-y-out">
              Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-full md:max-w-4xl mx-auto grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center justify-center py-2 md:py-4 col-span-1">
                {/* Your content here */}
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-6 md:px-10 py-8 md:py-12 pt-12 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  {/* Image goes here */}
                </div>
                <blockquote className="text-lg md:text-xl font-medium mb-6">
                  “ I love this product and would recommend it to anyone. Could not be easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block text-base md:text-lg font-bold mb-3">Darya Finger</cite>
                <div className="text-gray-600 text-sm">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
