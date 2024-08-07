
import React from 'react';
import OffreInput from './OffreInputFU';

const MeilleureOffre = ({ enchere, nouvelleOffre, setNouvelleOffre,handleOffreSubmit, isParticipant
  //  meilleureOffre, onSubmitOffer
 }) =>{ 
  
  return(
  <div className="mt-4">
    <p>Meilleure offre : {enchere?.meilleurMontant}
      {/* {meilleureOffre} */}
    </p>
    {/* <input type="number" placeholder="Votre offre" className="w-64 py-2 px-4 border border-gray-300 rounded mt-4" />
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={onSubmitOffer}>
      Soumettre votre offre
    </button> */}

    <OffreInput nouvelleOffre={nouvelleOffre} setNouvelleOffre={setNouvelleOffre} handleOffreSubmit={handleOffreSubmit} isParticipant={isParticipant} />
  </div>
);
}

export default MeilleureOffre;


