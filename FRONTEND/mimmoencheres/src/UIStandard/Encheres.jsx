

import React, { useContext } from 'react';

import { FaBath } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../node_modules/swiper/swiper-bundle.min.css';

import Annonce from '../composants/Annonces';

// import AnnoncesContainer from '../composants/AnnoncesContainer'

import { AnnonceContext } from '../context/AnnonceContext';

const Encheres = (
  // { annonces, utilisateurId }
) => {

  const { annonces, images, loading, error } = useContext(AnnonceContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching annonces: {error.message}</p>;

    // const enchereAnnonces = [
    //   // Remplissez avec les données de vos annonces pour la page Enchères
    //   { id: 1 },
    //   { id: 2 },
    // ];

    return(
      <div className="flex flex-col h-full bg-gray-100 px-40 ">
      <h1 className="text-2xl font-bold mt-6 mb-4">Enchères</h1>
      
      {/* Section des paramètres de recherche */}
      <div className="flex flex-wrap gap-4 mb-4">
        
        <MdOutlineRealEstateAgent fill="black" size={28} />
        <select className="w-full md:w-auto border border-gray-300 px-2 py-1">
          <option value="">Types de propriétés</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
        <FaBed fill="black" size={28} />
        <input type="number" className="w-24 border border-gray-300 " placeholder="Chambre" />
        <FaBath className="text-black" size={24} />
        <input type="number" className="w-24 border border-gray-300 " placeholder="Salle-bain" />
        <FaMapMarkerAlt fill="black" size={24} />
        <input type="text" className="w-auto md:w-auto border border-gray-300 px-2 py-1" placeholder="Ville" />
        <input type="number" className="w-32 border border-gray-300 px-2 py-1" placeholder="Prix minimum" />
        <input type="number" className="w-32 border border-gray-300 px-2 py-1" placeholder="Prix maximum" />
        <button className="w-full md:w-auto bg-blue-500 text-white px-4 py-1">Recherche</button>
      </div>

      {/* <div>
        <AnnoncesContainer annonces={enchereAnnonces} page="Encheres" />
      </div> */}

      <div className="flex flex-wrap">
      {annonces.map((annonce) => (
        <Annonce key={annonce.id} annonce={annonce} page="encheres" images={images}
        // utilisateurId={utilisateurId} 
        />
      ))}
      </div>

    </div>
  );
};

export default Encheres;