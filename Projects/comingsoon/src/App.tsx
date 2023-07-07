import React from "react";
import { FaFacebook } from 'react-icons/fa'



function App() {

  return (
    <div
      className="h-screen bg-cover bg-background">
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
        <div className="text-center">
          <h1 className="text-7xl sm:text-5xl capitalize tracking-widest text-blue-600 lg:text-9xl">
            Coming Soon
          </h1>

          <p className="mt-6 text-3xl sm:1xl md:2xl text-blue-400 font-light">
            You can visit our facebook page for further updates.
          </p>

          <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            

            <button className="transform flex flex-row items-center justify-center gap-3 rounded-md bg-blue-700 px-8 py-2 text-md font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
              <FaFacebook size={20} />
              <a href='https://www.facebook.com/DrugstoresAssociationOfthePhilippines' >Facebook Page</a>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
