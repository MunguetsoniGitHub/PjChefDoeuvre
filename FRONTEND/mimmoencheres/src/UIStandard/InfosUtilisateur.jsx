

import React from 'react';
import { useAuth } from '../hooks/useAuth';

const InfosUtilisateur = () => {
  const { user } = useAuth();

  return (
    <div className="w-full bg-white rounded-lg p-4">
      
      <div className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between">
            
             <div className="w-full h-32 mb-4 relative">
              {/* Photo de couverture */}
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={user.profileImageUrl}
                  alt="Photo de couverture"
                />
                
               {/* Photo de profile */} 
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                  <img
                    className="w-20 h-20 rounded-full border-4 border-white"
                    src={user.profileImageUrl}
                    alt="Photo de profil"
                  />
                </div>
              </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold">{user.nom} {user.postnom}</h3>
              <p className="text-center text-gray-700 ">Utilisateur</p>
            </div>
        </div>

      
      <h2 className="text-xl mb-4">Informations de l'utilisateur</h2>
      <div className="mb-2">
        <label className="text-gray-700">Prénom:</label>
        <p className="font-bold">{user.prenom}</p>
      </div>
      <div className="mb-2">
        <label className="text-gray-700">Nom:</label>
        <p className="font-bold">{user.nom}</p>
      </div>
      <div className="mb-2">
        <label className="text-gray-700">Postnom:</label>
        <p className="font-bold">{user.postnom}</p>
      </div>
      <div className="mb-2">
        <label className="text-gray-700">Adresse:</label>
        <p className="font-bold">{user.adresse}</p>
      </div>
      <div className="mb-2">
        <label className="text-gray-700">Email:</label>
        <p className="font-bold">{user.email}</p>
      </div>
      <div className="mb-2">
        <label className="text-gray-700">Téléphone:</label>
        <p className="font-bold">{user.numeroTel}</p>
      </div>
    </div>
  );
};

export default InfosUtilisateur;
