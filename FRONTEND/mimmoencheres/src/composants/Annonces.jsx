
import React, { useState, useEffect } from 'react';
import ImageSlider from './Annonce/ImageSlider';
import AnnonceDetails from './Annonce/AnnonceDetails';
// import Participants from './Annonce/Participants';
import MeilleureOffre from './Annonce/MeilleureOffre';
import Description from './Annonce/Description';

// import ParticiperButton from './Annonce/ParticiperButton';
// import OffreInput from './Annonce/OffreInput';

import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

const Annonce = ({ annonce, annonceId,
  // annonce,  , utilisateurId 
  page,images,  enchere}) => {

  // const [participated, setParticipated] = useState(false);

  const {user} = useAuth();
  
  // const [enchereId, setEnchereId]  = useState(null);
  // console.log('test enchereId',enchereId);
  
  // setEnchereId ( annonce.encheres.flatMap(enchere => ({
  //     ...enchere, ID :enchere.id
  //   }) ) )
  // const enchereId =annonce.encheres.map(enchere => (enchere.id) );
  const enchereId = enchere.id;

  // const [enchere, setEnchere] = useState(null);
  const [offres, setOffres] = useState([]);
  const [nouvelleOffre, setNouvelleOffre] = useState(0);
  const [isParticipant, setIsParticipant] = useState(false);

  useEffect(() => {

    const fetchOffres = async () => {
      // const response = await axios.get(`http://localhost:3000/api/offres/${annonceId}`);
      // // const response = await axios.get(`http://localhost:3000/api/offres/${enchereId}`);
      const response = await axios.get(`https://pjchefdoeuvre.onrender.com/api/offres/${annonceId}`);
      setOffres(response.data);
    };

    const checkParticipation = async () => {
      try {
        const response = await axios.get(`https://pjchefdoeuvre.onrender.com/api/enchere/${enchereId}/participation/${user.id}`);
        setIsParticipant(response.data.isParticipant);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchOffres();
    checkParticipation();
  },[annonceId, enchereId, user.id]);

  const handleInscription = async () => {
    const utilisateurId= user.id;
    try {
      // await axios.post(`http://localhost:3000/api/enchere/${enchereId}/inscrire`, {
      // // await axios.post(`http://localhost:3000/api/enchere/${annonceId}/inscrire`, {
        await axios.post(`https://pjchefdoeuvre.onrender.com/api/enchere/${enchereId}/inscrire`, {
  
      utilisateurId, 
      // enchereId
      });
      setIsParticipant(true);
      
    } catch (error) {
      console.error(error);
      console.log( "utilisateur qui participe", utilisateurId);
      console.log( "enchere concerné", enchereId);
    }
  };

  const handleOffreSubmit = async () => {
    if (!isParticipant) {
      console.error('Vous devez être inscrit à l\'enchère pour soumettre une offre');
      return;
    }

    try {
      // const response = await axios.post('http://localhost:3000/api/offre', {
        const response = await axios.post('https://pjchefdoeuvre.onrender.com/api/offre', {
        montantOffre: nouvelleOffre,
        utilisateurId: user.id,
        // enchereId: enchere.id,
        enchereId
      });
      setOffres([...offres, response.data]);
      // setEnchere({ ...enchere, meilleurMontant: nouvelleOffre });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`flex flex-col w-full ${page === 'compte' ? 'w-full' : 'sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 my-4 min-w-[300px]'}`}>
      {page === 'compte' ? (
        <div className="flex flex-col space-y-4">
        {/* Structure en colonne sur petits écrans, ligne à partir de md */}
        <div className="flex-grow md:flex md:flex-row md:space-x-4">
          
            <ImageSlider annonce={annonce} images={images} enchere={enchere} />
          
            <AnnonceDetails
              annonce={annonce}
              page={page}
              enchere={enchere}
              handleInscription={handleInscription}
              isParticipant={isParticipant}
            />
         
        </div>
  
        {/* MeilleureOffre et Description toujours en colonne */}
        <div className="flex flex-col space-y-4">
          <MeilleureOffre
            enchere={enchere}
            nouvelleOffre={nouvelleOffre}
            setNouvelleOffre={setNouvelleOffre}
            handleOffreSubmit={handleOffreSubmit}
            isParticipant={isParticipant}
          />
          <Description annonce={annonce} />
        </div>
      </div>
      ) : (
        <>
          <div className="flex-grow">
            <ImageSlider annonce={annonce} images={images} enchere={enchere} />
            <AnnonceDetails
              annonce={annonce}
              page={page}
              enchere={enchere}
              handleInscription={handleInscription}
              isParticipant={isParticipant}
            />
          </div>
          {page === 'compte' && isParticipant && (
            <MeilleureOffre
              enchere={enchere}
              nouvelleOffre={nouvelleOffre}
              setNouvelleOffre={setNouvelleOffre}
              handleOffreSubmit={handleOffreSubmit}
              isParticipant={isParticipant}
            />
          )}
          <Description annonce={annonce} />
        </>
      )}
    </div>
  );
  
};

export default Annonce;

