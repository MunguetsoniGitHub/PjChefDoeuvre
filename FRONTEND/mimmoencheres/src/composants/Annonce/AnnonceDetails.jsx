import React from 'react';
import ParticiperButton from './ParticiperButton';

const AnnonceDetails = ({ annonce, page, utilisateurId, setParticipated }) => (
  <div className={`mt-4 ${page === 'encheres' ? 'flex justify-between' : ''}`}>
    <div>
      <h2 className="text-2xl font-bold">{annonce.typeBien}</h2>
      <p>Prix de départ : {annonce.prixInitial}</p>
      <p>Palier : {annonce.palier}</p>
      <p>Début des enchères : {annonce.debutEncheres}</p>
      <p>Fin prévue : {annonce.finPrevue}</p>
      <p>État de l'annonce : {annonce.etatAnnonce}</p>
    </div>
    {page === 'encheres' && (
      <ParticiperButton
        annonceId={annonce.id}
        utilisateurId={utilisateurId}
        setParticipated={setParticipated}
      />
    )}
  </div>
);

export default AnnonceDetails;
