import React, { useContext, useState } from 'react';
import { FaBath, FaMapMarkerAlt, FaBed } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Annonce from '../composants/Annonces';
import { AnnonceContext } from '../context/AnnonceContext';

const Encheres = () => {
    const { annonces, loading, error } = useContext(AnnonceContext);
    const [showSearch, setShowSearch] = useState(false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching annonces: {error.message}</p>;

    return (
        <div className="flex flex-col h-full bg-gray-100 px-4 md:px-40 overflow-x-hidden">
            <h1 className="text-2xl font-bold mt-6 mb-4">Enchères</h1>
            
            {/* Bouton pour afficher/masquer la recherche */}
            <button 
                className="bg-blue-500 text-white px-4 py-2 mb-4"
                onClick={() => setShowSearch(!showSearch)}
            >
                Recherche
            </button>

            {/* Section des paramètres de recherche */}
            {showSearch && (
                <form className="flex flex-col gap-4 mb-4 w-full">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <MdOutlineRealEstateAgent fill="black" size={28} />
                            <select className="w-full md:w-auto border border-gray-300 px-2 py-1">
                                <option value="">Types de propriétés</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBed fill="black" size={28} />
                            <input type="number" className="w-24 border border-gray-300" placeholder="Chambre" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBath className="text-black" size={24} />
                            <input type="number" className="w-24 border border-gray-300" placeholder="Salle-bain" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt fill="black" size={24} />
                            <input type="text" className="w-auto md:w-auto border border-gray-300 px-2 py-1" placeholder="Ville" />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" className="w-32 border border-gray-300 px-2 py-1" placeholder="Prix minimum" />
                            <input type="number" className="w-32 border border-gray-300 px-2 py-1" placeholder="Prix maximum" />
                        </div>
                        <button className="w-auto bg-blue-500 text-white px-4 py-1">
                            Rechercher
                        </button>
                    </div>
                </form>
            )}

                <div className="flex flex-wrap -mx-2">
                  {annonces.map((annonce) =>
                    annonce.encheres.map((enchere) => (
                      <Annonce
                        key={annonce.id}
                        annonce={annonce}
                        page="encheres"
                        images={annonce.images}
                        annonceId={annonce.id}
                        enchere={enchere}
                      />
                    ))
                  )}
                </div>
        </div>
    );
};

export default Encheres;
