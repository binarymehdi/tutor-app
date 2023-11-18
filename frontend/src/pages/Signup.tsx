export default function Signup() {
    return (
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-19 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <span className="sr-only">Tutor App</span>
            <span className="text-4xl font-bold tracking-tight text-blue-600">
              Azrou
            </span>{" "}
            <span className="text-4xl font-bold tracking-tight">Aid</span>
          </a>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
               Sign Up For An Account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="border bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg py-2 px-2"
                    placeholder="First Name"
                    required
                  />
                  <input 
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="border bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg py-2 px-2"
                    placeholder="Last Name"
                    required
                    />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="Terms_and_Conditions"
                        aria-describedby="Terms_and_Conditions"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <span> I Accept the <a href = "#" className="text-blue-500 font-semibold " >Terms Of Use</a> & <a href = "#" className="text-blue-500 font-semibold" > Privacy Policy</a></span>
                    </div>
                  </div>
                 
                </div>
                <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Sign Up
                  </button>
                <p className="text-sm font-light text-gray-500">
                  Have An Account Already <a href="/Login" className="font-medium text-primary-600 hover:underline">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
