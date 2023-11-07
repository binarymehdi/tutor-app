export default function FeaturesBlocks() {
  // A mock data array of content for each block
  const contentData = [
    {
      title: "school 1",
      description: "Description for school 1",
      // You might add more properties or content related to each block
    },
    {
      title: "school 2",
      description: "Description for school 2",
    },
    {
      title: "school 3",
      description: "Description for school 3",
      // You might add more properties or content related to each block
    },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Empower Rural Education</h2>
            <p className="text-lg text-gray-600">
            Our mission is to support countryside schools and inspire the next generation of learners.
            </p>
          </div>

          <div className="max-w-full md:max-w-2xl lg:max-w-none mx-auto grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {contentData.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center p-4 sm:p-6 bg-white rounded shadow-xl">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                {/* Add more content structure for each block */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
