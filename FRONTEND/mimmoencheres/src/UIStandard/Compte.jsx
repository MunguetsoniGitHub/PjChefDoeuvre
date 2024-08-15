
import watson from '../assets/watson.png'

import React, { useContext, useEffect, useState } from "react";
import Annonce from '../composants/AnnonceForUser';
// import Annonce from '../composants/Annonces';
import { useAuth } from '../hooks/useAuth';
import { AnnonceContext } from '../context/AnnonceContext';

import axios from 'axios';

const Compte = () => {

  const {user} = useAuth();
  //const { annonces, images,  encheres, loading, error } = useContext(AnnonceContext);

  const [encheres, setEncheres] = useState([]);
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchEncheres = async () => {
      const userId = user.id;
      try {
        // const response = await axios.get(`http://localhost:3000/api/utilisateurs/${userId}/encheres`);
        const encheresResponses = await axios.get(`http://localhost:3000/api/utilisateurs/${userId}/encheres`);
        // setEncheres(response.data);
        setEncheres(encheresResponses.data);
        // console.log(, "reponse de encheres");

        const imagesPromises = encheresResponses.data.map(enchere =>
          axios.get(`http://localhost:3000/api/images/annonce/${enchere.annonceId}`)
        );
        const imagesResponses = await Promise.all(imagesPromises);

        const encheresWithDetails = encheresResponses.data.map((enchere, index) => ({
          ...enchere,
          images: imagesResponses[index].data,
          
        
        }));

        setEncheres(encheresWithDetails);
        // setImages(imagesResponses.map(response => response.data));

        console.log(imagesResponses, "reponse de images");

      } catch (error) {
        setError(error);
        console.log(error, "fetchEncheres, erreur lors de recup enchere");
      }
      console.log(userId, "utilisateur ftEnchr");
    };
    
    const fetchAnnonces = async () => {
      const userId = user.id;
      try {
        // const response = await axios.get(`http://localhost:3000/api/utilisateurs/${userId}/annonces`);
        const annoncesResponse = await axios.get(`http://localhost:3000/api/utilisateurs/${userId}/annonces`);
        // setAnnonces(response.data);
        setAnnonces(annoncesResponse.data);
        console.log(annoncesResponse.data, 'données de annonces');

        const imagesPromises = annoncesResponse.data.map(annonce =>
          axios.get(`http://localhost:3000/api/images/annonce/${annonce.id}`)
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
    // fetchAnnonces
    // setLoading(false)

    
  }, [user.id]);
  
  console.log(encheres, "reponse de encheres");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

    return(

    <div className="flex flex-1 overflow-hidden h-full bg-gray-100">
      {/* Section latérale gauche */}
      <div className="w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between">
        
        <div className="text-center flex flex-col items-center">
        
           {/* Photo de profil et nom d'utilisateur */}
          <img className="w-20 h-20 rounded-full mb-2" src={user.profileImageUrl} alt="Photo de profil" />

          <h3 className="text-lg font-bold">{user.nom} {user.postnom} </h3>
          
        </div>
        {/* Titre de la section Compte */}
        <div className="mt-4">
          <p className="text-gray-700">Utilisateur</p>
        </div>
      </div>

      {/* Section centrale  */}
        <div className="flex-1  rounded-lg shadow-md p-4 overflow-auto">
          
          {/* {
              annonces.map((annonce) => //{
                // if(annonce.utilisateurId === user.id)
                  {annonce.encheres.map(enchere => (
                  <Annonce key={annonce.id} annonce={annonce} page="compte" images={images} annonceId={annonce.id}  enchere={ enchere}
                  // utilisateurId={utilisateurId} 
                  />
                ))
                }
              //}
            )   
          } */}

            <h2 className="text-xl font-bold mb-4">Mes participations aux Enchères</h2>
              {/* {encheres?.map((enchere) => (
                <Annonce key={enchere.id} annonce={enchere.annonce} page="compte" images={enchere.annonce.images} enchere={enchere} annonceId={enchere.annonce.id} />
              ))} */}

              {encheres?.map((enchere) => (
                <Annonce key={enchere.id} annonce={enchere.annonce} page="compte" images={enchere.images} enchere={enchere} annonceId={enchere.annonceId} />
              ))}

              <h2 className="text-xl font-bold mb-4">Mes Annonces</h2>
              {/* {annonces.map((annonce) => (
                <Annonce key={annonce.id} annonce={annonce} page="compte" images={annonce.images} />
              ))} */}

              {annonces.map((annonce) => ( annonce.encheres.map(enchere => (
                <Annonce key={annonce.id} annonce={annonce} page="compte" images={annonce.images} 
                annonceId={annonce.id}  enchere={ enchere}
                // utilisateurId={utilisateurId} 
                />))
              ))}
       
        </div>



      <div className="w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col justify-center">
        {/* Informations sur l'utilisateur */}
        <div>
          <h2 className="text-xl font-bold mb-4">Informations de l'utilisateur</h2>
          <div className="mb-2">
            <label >Prénom:</label>
            <p className="text-gray-700 font-bold">{user.prenom}</p>
          </div>
          <div className="mb-2">
            <label >Nom:</label>
            <p className="text-gray-700 font-bold">{user.nom}</p>
          </div>
          <div className="mb-2">
            <label >Postnom:</label>
            <p className="text-gray-700 font-bold">{user.postnom}</p>
          </div>
          <div className="mb-2">
            <label >Adresse:</label>
            <p className="text-gray-700 font-bold">{user.adresse}</p>
          </div>
          <div className="mb-2">
            <label >Email:</label>
            <p className="text-gray-700 font-bold">{user.email}</p>
          </div>
          <div className="mb-2">
            <label >Téléphone:</label>
            <p className="text-gray-700 font-bold">{user.numeroTel}</p>
          </div>
          
        </div>
        </div>
    </div>
    )
}

export default Compte;