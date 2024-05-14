

import React from "react";

const Apropos = () => {


    return(

    <div className=" flex flex-col h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">À Propos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Notre Histoire</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Notre Équipe</h2>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Apropos;