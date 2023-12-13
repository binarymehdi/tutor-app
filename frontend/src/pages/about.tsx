const About = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-9xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4">Azrou <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Aid</span></h1>
            <p className="text-2xl text-gray-800">We are a team of committed students from AUI who want to make an impact on the community.</p>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-lg text-gray-800">
              <li className="p-4 bg-gray-100 rounded-lg shadow-md">Chaimae</li>
              <li className="p-4 bg-gray-100 rounded-lg shadow-md">moubaiki</li>
              <li className="p-4 bg-gray-100 rounded-lg shadow-md">sanae</li>
              <li className="p-4 bg-gray-100 rounded-lg shadow-md">monatdir</li>
              {/* Add more members as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;