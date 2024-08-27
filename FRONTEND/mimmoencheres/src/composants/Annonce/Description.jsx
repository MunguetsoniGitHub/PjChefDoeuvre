import React, { useState } from 'react';

const Description = ({ annonce }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex flex-column">
      

      <div
        className={`absolute bottom-0 left-0 w-full bg-white z-10 
          overflow-scroll overflow-x-clip
          transition-all duration-500 ease-in-out 
          
          
          
          ${expanded ? 
            'transform -translate-y-11 h-80' 
            : 'transform translate-y-0 h-0'
        }`}
      >
        {/* <p className="p-4">
          {description}
        </p> */}

        <div className="p-4 border-radius-8">
          <p> Document : {annonce.titre} </p>
         
          <p>Detail : {annonce.description} </p>
          
          <p>Surface : {annonce.surface} </p>
          <p> Localisation: {annonce.localisation}</p>
          
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-gray-200 text-center py-2"
      >
        {expanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </div>
  );
};

export default Description;