
import React from "react";

function NousChoisir ({title, lorem})  {

    return(
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-6">
            <h3 className="text-xl  mb-2 text-center">{title}</h3>
            <p className="text-gray-700">{lorem}</p>
        </div>
    );
}

export default NousChoisir;