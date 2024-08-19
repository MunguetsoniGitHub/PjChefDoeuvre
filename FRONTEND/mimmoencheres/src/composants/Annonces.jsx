
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
    // const fetchEnchere = async () => {
    //   const response = await axios.get(`http://localhost:3000/api/enchere/${annonceId}`); 
    //   // const response = await axios.get(`http://localhost:3000/api/enchere/${enchereId}`);
    //   setEnchere(response.data);
    // };

    const fetchOffres = async () => {
      // const response = await axios.get(`http://localhost:3000/api/offres/${annonceId}`);
      // // const response = await axios.get(`http://localhost:3000/api/offres/${enchereId}`);
      const response = await axios.get(`https://pjchefdoeuvre.onrender.com/api/offres/${annonceId}`);
      setOffres(response.data);
    };

    // fetchEnchere();
    fetchOffres();
  }, 
  [annonceId]
  // [annonceId,enchereId]
  );

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
    <div className={`max-w-4xl mx-auto my-8 px-4 ${page === 'encheres' ? 'w-1/3' : ''}`}>
      <ImageSlider annonce={annonce} images={images} enchere={enchere} />
      <AnnonceDetails  annonce={annonce} page={page}
        // utilisateurId={utilisateurId} setParticipated={setParticipated}  
        enchere={enchere}
        handleInscription={handleInscription} isParticipant={isParticipant}
         />

      {/* {page === 'compte' && participated && ( */}
      {page === 'compte' && isParticipant && (
        <>
          <MeilleureOffre 
          // meilleureOffre={annonce.meilleureOffre} 
          enchere={enchere}
          nouvelleOffre={nouvelleOffre}
        setNouvelleOffre={setNouvelleOffre}
        handleOffreSubmit={handleOffreSubmit}
        isParticipant={isParticipant}
          />
          {/* <Participants participants={annonce.participants} /> */}
        </>
      )}
      <Description />
    </div>
  );
};

export default Annonce;

