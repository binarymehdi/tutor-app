export default function FeaturesBlocks() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Empower Rural Education</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* Replace the following div blocks with your custom content */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* SVG and content for the 1st item */}
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* SVG and content for the 2nd item */}
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* SVG and content for the 3rd item */}
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* SVG and content for the 4th item */}
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* SVG and content for the 5th item */}
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* SVG and content for the 6th item */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
