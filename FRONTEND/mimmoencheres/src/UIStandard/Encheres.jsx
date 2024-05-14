

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/swiper/swiper-bundle.min.css';

import Annonce from '../composants/Annonces';

const Encheres = () => {


    return(
      <div className="flex flex-col h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mt-6 mb-4">Enchères</h1>
      
      {/* Section des paramètres de recherche */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select className="w-full md:w-auto border border-gray-300 px-2 py-1">
          <option value="">Types de propriétés</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
        <input type="number" className="w-50px md:w-auto border border-gray-300 " placeholder="Nbr chambres" />
        <FontAwesomeIcon icon={faBath} />
        <input type="number" className="w-50px md:w-auto border border-gray-300 " placeholder="Nbr salles de bain" />
        <input type="text" className="w-full md:w-auto border border-gray-300 px-2 py-1" placeholder="Ville" />
        <input type="number" className="w-min md:w-auto border border-gray-300 px-2 py-1" placeholder="Prix minimum" />
        <input type="number" className="w-min md:w-auto border border-gray-300 px-2 py-1" placeholder="Prix maximum" />
        <button className="w-full md:w-auto bg-blue-500 text-white px-4 py-1">Recherche</button>
      </div>

      {/* Section pour afficher les annonces */}
      <div>
        {/* Ici, vous pouvez mappez les annonces et les afficher */}

        <Annonce />
      </div>
    </div>
  );
};

export default Encheres;