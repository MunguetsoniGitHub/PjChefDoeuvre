
import React from 'react';

const OffreInput = ({ nouvelleOffre, setNouvelleOffre, handleOffreSubmit, isParticipant }) => {
  return (
    <div>
      <input
        type="number"
        value={nouvelleOffre}
        onChange={(e) => setNouvelleOffre(parseFloat(e.target.value))}
        disabled={!isParticipant}
      />
      <button onClick={handleOffreSubmit} disabled={!isParticipant}>
        Soumettre une offre
      </button>
    </div>
  );
};

export default OffreInput;
