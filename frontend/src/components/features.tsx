export default function Features() {
  return (
    <section className="relative bg-gray-100">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Added a missing breakpoint in sm:px */}
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Empower Rural Education</h1>
            <p className="text-base sm:text-lg text-gray-600">
            Our mission is to support countryside schools and inspire the next generation of learners.
            </p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3">Schools</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                </p>
              </div>
            </div>

            <div className="relative md:w-full md:col-span-5 lg:col-span-6 md:order-1">
              <img src="/workspaces/tutor-app/frontend/public/images/features-bg.png" alt="Features bg" className="md:max-w-none mx-auto rounded" />
              <img src="/workspaces/tutor-app/frontend/public/images/features-element.png" alt="Element" className="md:max-w-none absolute w-full left-0 transform animate-float" style={{ top: '30%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
