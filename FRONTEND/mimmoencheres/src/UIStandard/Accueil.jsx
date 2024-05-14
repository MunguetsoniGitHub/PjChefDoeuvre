

import React from "react";

const Accueil = () => {



    return(
    <div className=" flex flex-col h-max bg-gray-100">
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue sur EnchèresImmo</h1>
          <p className="text-lg md:text-xl mb-8">Trouvez votre prochaine propriété de rêve.</p>
          <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded shadow-md">Explorer les Enchères</button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Dernières Enchères</h2>
        {/* Section pour afficher les enchères récentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte d'enchère 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Maison à la plage</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Temps restant: 2 jours</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Enchérir</button>
            </div>
          </div>
          {/* Carte d'enchère 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Appartement en centre-ville</h3>
            <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Temps restant: 3 jours</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Enchérir</button>
            </div>
          </div>
          {/* Carte d'enchère 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Villa de luxe avec piscine</h3>
            <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Temps restant: 5 jours</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Enchérir</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EnchèresImmo - Tous droits réservés</p>
        </div>
      </footer>

    </div>
    )
}

export default Accueil;