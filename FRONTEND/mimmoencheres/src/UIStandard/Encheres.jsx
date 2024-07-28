
import React, { useContext } from 'react';
import { FaBath, FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Annonce from '../composants/Annonces';
import { AnnonceContext } from '../context/AnnonceContext';

const Encheres = () => {

    const { annonces, images,  encheres, loading, error } = useContext(AnnonceContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching annonces: {error.message}</p>;

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

      <div className="flex flex-wrap">
      {annonces.map((annonce) => ( annonce.encheres.map(enchere => (
        <Annonce key={annonce.id} annonce={annonce} page="encheres" images={images} annonceId={annonce.id}  enchere={ enchere}
        // utilisateurId={utilisateurId} 
        />
      ))
      ))}
      </div>

    </div>
  );
};

export default Encheres;