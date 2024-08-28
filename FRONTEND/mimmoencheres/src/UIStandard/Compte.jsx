
import React, { useContext, useEffect, useState } from "react";
import Annonce from '../composants/Annonces';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Compte = () => {

  const {user} = useAuth();
  const navigate = useNavigate();
  const [encheres, setEncheres] = useState([]);
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [images, setImages] = useState([]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchEncheres = async () => {
      const userId = user.id;
      try {       
        const encheresResponses = await axios.get(`https://pjchefdoeuvre.onrender.com/api/utilisateurs/${userId}/encheres`);       
        setEncheres(encheresResponses.data);

        const imagesPromises = encheresResponses.data.map(enchere =>
          axios.get(`https://pjchefdoeuvre.onrender.com/api/images/annonce/${enchere.annonceId}`)
        );
        const imagesResponses = await Promise.all(imagesPromises);

        const encheresWithDetails = encheresResponses.data.map((enchere, index) => ({
          ...enchere,
          images: imagesResponses[index].data,
     
        }));
        setEncheres(encheresWithDetails);

        // console.log(imagesResponses, "reponse de images");

      } catch (error) {
        setError(error);
        console.log(error, "fetchEncheres, erreur lors de recuperation enchere");
      }
    
    };
    
    const fetchAnnonces = async () => {
      const userId = user.id;
      try {
        
        const annoncesResponse = await axios.get(`https://pjchefdoeuvre.onrender.com/api/utilisateurs/${userId}/annonces`);

        // setAnnonces(response.data);
        setAnnonces(annoncesResponse.data);
        console.log(annoncesResponse.data, 'données de annonces');

        const imagesPromises = annoncesResponse.data.map(annonce =>
          axios.get(`https://pjchefdoeuvre.onrender.com/api/images/annonce/${annonce.id}`)
        );
        const imagesResponses = await Promise.all(imagesPromises);

        // const encheresPromises = annoncesResponse.data.map(annonce => 
        //   axios.get(`http://localhost:3000/api/utilisateurs/${userId}/encheres`) );
        // const encheresResponses = await Promise.all(encheresPromises);

        const annoncesWithDetails = annoncesResponse.data.map((annonce, index) => ({
          ...annonce,
          images: imagesResponses[index].data,         
        //   encheres : encheresResponses[index].data
        }));

        setAnnonces(annoncesWithDetails);
        setImages(imagesResponses.map(response => response.data));
        // setEncheres(encheresResponses.map(response => response.data));

      } catch (error) {
        setError(error);
        console.log(error, "fetchEncheres, erreur lors de recup enchere");
      }
    };

    Promise.all([fetchEncheres(), fetchAnnonces()]).then(() => setLoading(false));
    
  }, [user.id]);
  
  // console.log(encheres, "reponse de encheres");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

    return(

    <div className="flex flex-1 overflow-hidden h-full bg-gray-100">
      
      {!isMobile && (
                  
                  <div className="w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between">
                    
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
              
        )}
              

      {/* Section centrale en plein écran si mobile */}
      <div className={`flex-1 rounded-lg shadow-md p-4 overflow-auto ${isMobile ? 'w-full' : ''}`}>
        <h2 className="text-xl font-bold mb-4">Mes participations aux Enchères</h2>
        {encheres?.map((enchere) => (
          <Annonce key={enchere.id} annonce={enchere.annonce} page="compte" images={enchere.images} enchere={enchere} annonceId={enchere.annonceId} />
        ))}
        <h2 className="text-xl font-bold mb-4">Mes Annonces</h2>
        {annonces.map((annonce) => ( annonce.encheres.map(enchere => (
          <Annonce key={annonce.id} annonce={annonce} page="compte" images={annonce.images} annonceId={annonce.id} enchere={enchere} />
        ))))}
      </div>


      {!isMobile && (
        <>

          {/* Section latérale droite */}
          <div className="w-1/4 bg-white rounded-lg shadow-md p-4">
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
        </>
      )}
    </div>
    )
}

export default Compte;