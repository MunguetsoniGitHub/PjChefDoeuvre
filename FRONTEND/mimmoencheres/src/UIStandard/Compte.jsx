
import watson from '../assets/watson.png'

import React, { useContext } from "react";
import Annonce from '../composants/Annonces';
import { useAuth } from '../hooks/useAuth';
import { AnnonceContext } from '../context/AnnonceContext';

// import AnnoncesContainer from '../composants/AnnoncesContainer'


const Compte = (
  // { annonces, utilisateurId }
) => {

  const {user} = useAuth();

  // const { annonces, images, loading, error } = useContext(AnnonceContext);
  const { annonces, images,  encheres, loading, error } = useContext(AnnonceContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching annonces: {error.message}</p>;
  
  //  if(annonces.utilisateurId === user.id){
    
  //    annonces.map((annonce) => (
  //      <Annonce key={annonce.id} annonce={annonce} page="compte" utilisateurId={utilisateurId} />
  //    ))
    
  //  }
  
    // const compteAnnonces = [
    //   // Remplissez avec les données de vos annonces pour la page Compte
    //   { id: 1 },
      
    //   // Ajoutez autant d'annonces que nécessaire
    // ];

    return(

        // <div className=" flex flex-col h-screen bg-gray-100">
        //     <p>Comptes</p>
        // </div>

    <div className="flex flex-1 overflow-hidden h-full bg-gray-100">
      {/* Section latérale gauche */}
      <div className="w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between">
        
        <div className="text-center flex flex-col items-center">
        
           {/* Photo de profil et nom d'utilisateur */}
          <img className="w-12 h-12 rounded-full mb-2" src={watson} alt="Photo de profil" />

          <h3 className="text-lg font-bold">{user.nom} {user.postnom} </h3>
          
        </div>
        {/* Titre de la section Compte */}
        <div className="mt-4">
          <p className="text-gray-700">Utilisateur</p>
        </div>
      </div>

      {/* Section centrale */}
        
        {/* <div className="flex-1 bg-white rounded-lg shadow-md p-4 overflow-auto">
        <AnnoncesContainer annonces={compteAnnonces} page="Compte" />
        </div> */}
        
        
        {/* A restorer dès que nécessaire ou prête  */}
        <div className="flex-1  rounded-lg shadow-md p-4 overflow-auto">
          
          {
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
        }
       
        </div>


      {/* Section latérale droite */}
      <div className="w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col justify-center">
        {/* Informations sur l'utilisateur */}
        <div>
          <h2 className="text-xl font-bold mb-4">Informations de l'utilisateur</h2>
          <div className="mb-2">
            <label className="font-bold">Prénom:</label>
            <p className="text-gray-700">{user.prenom}</p>
          </div>
          <div className="mb-2">
            <label className="font-bold">Nom:</label>
            <p className="text-gray-700">{user.nom}</p>
          </div>
          <div className="mb-2">
            <label className="font-bold">Postnom:</label>
            <p className="text-gray-700">{user.postnim}</p>
          </div>
          <div className="mb-2">
            <label className="font-bold">Adresse:</label>
            <p className="text-gray-700">{user.adresse}</p>
          </div>
          <div className="mb-2">
            <label className="font-bold">Email:</label>
            <p className="text-gray-700">{user.email}</p>
          </div>
          <div className="mb-2">
            <label className="font-bold">Téléphone:</label>
            <p className="text-gray-700">{user.numeroTel}</p>
          </div>
          {/* Ajouter d'autres informations selon les besoins */}
        </div>
        </div>
    </div>
    )
}

export default Compte;