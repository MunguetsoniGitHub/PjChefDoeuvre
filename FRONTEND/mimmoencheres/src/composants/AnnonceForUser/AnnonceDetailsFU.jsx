import React from 'react';
import ParticiperButton from './ParticiperButtonFU';

const AnnonceDetails = ({ annonce, page, 
  // utilisateurId, setParticipated 
  enchere, handleInscription, isParticipant}) => (
  <div className={`mt-4 ${page === 'encheres' ? 'flex justify-between' : ''}`}>
    <div>
      <h2 className="text-2xl font-bold">{annonce?.typeBien}</h2>
      {/* <p>Prix de départ : {annonce.prixInitial}</p> */}
      <p>Prix de départ : {enchere?.montantDuDepart}</p>
      {/* <p>Palier : {annonce.palier}</p> */}
      {/* <p>Début des enchères : {annonce.debutEncheres}</p>
      <p>Fin prévue : {annonce.finPrevue}</p> */}
      <p>Début des enchères : {new Date(enchere?.dateHeureDebut).toLocaleString()}</p>
      <p>Fin prévue : {new Date(enchere?.dateHeureFin).toLocaleString()}</p>
      {/* <p>État de l'annonce : {annonce.etatAnnonce}</p> */}
    </div>
    {page === 'encheres' && (
      // <ParticiperButton annonceId={annonce.id} utilisateurId={utilisateurId}  setParticipated={setParticipated} />
      <ParticiperButton handleInscription={handleInscription} isParticipant={isParticipant} />
    )}
  </div>
);

export default AnnonceDetails;
