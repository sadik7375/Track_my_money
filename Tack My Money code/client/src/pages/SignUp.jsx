import React from 'react';

const SignUp = () => {
    return (
       
        <div className="flex flex-col md:flex-row items-center justify-center md:h-screen mx-auto">
    {/* <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      />
      Flowbite
    </a> */}
    <div className="w-full md:w-1/2 bg-white md:rounded-lg md:shadow dark:border md:mt-0  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#6075e2] ">
        <h1 className="text-xl  font-bold leading-tight tracking-tight mt-1 pt-1 text-gray-900 md:text-2xl dark:text-white">
          Create Your account
        </h1>
        <form className="space-y-3 md:space-y-1" action="#">
        <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
            
              className=" sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Email
            </label>
            <input
              type="email"
            
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="mail@gmail.com"
              required=""
            />
          </div>
         
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
             
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="phone number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Phone number
            </label>
            <input
              type="text"
            
              placeholder= "Phone number"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
            <div className="flex justify-center mt-9">
          <button
            type="submit"
            className=" px-10  text-black hover:bg-primary-700 focus:ring-4 md:mx-3 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center hover:bg-indigo-500 hover:text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          </div>
          <div className="mt-8">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-white hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
          </div>
          <div className="mt-10">
          <p className="text-white flex justify-center ">------------OR------------</p>
          <span ><a className="text-white  flex justify-center" href="">Google icon</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
};

export default SignUp;