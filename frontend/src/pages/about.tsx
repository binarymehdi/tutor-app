

export default function About() {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-10000 mx-auto md:h-screen lg:py-0 bg-gray-100">
        
        <div className="flex-1 mt-32">
          <header className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">About Our Mission</h1>
            <p className="text-gray-600">
              At Tutoring Services, our primary goal is to empower rural education.
              We are committed to supporting countryside schools and inspiring the
              next generation of learners. We strive to provide educational
              resources and opportunities to students in remote areas, ensuring they
              have access to quality education and a bright future.
            </p>
          </header>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
            <ul className="list-none">
              <li className="text-gray-600">Team Member 1</li>
              <li className="text-gray-600">Team Member 2</li>
              <li className="text-gray-600">Team Member 3</li>
            </ul>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Commitment</h2>
            <p className="text-gray-600">
              Tutoring Services is committed to bridging the educational gap by
              providing personalized learning experiences, mentorship, and resources
              to rural communities. We believe that every student, regardless of
              their geographical location, deserves a chance to access high-quality
              education.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to create a world where every student in rural areas has
              the tools, knowledge, and inspiration to succeed. We aim to build a
              brighter future by fostering a love for learning, encouraging
              creativity, and empowering students to reach their full potential.
            </p>
          </section>
        </div>
      </div>
    );
  }