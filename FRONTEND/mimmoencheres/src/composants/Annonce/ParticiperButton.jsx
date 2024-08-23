
import React from 'react';

const ParticiperButton = ({handleInscription, isParticipant}) => {

  return (
    <button onClick={handleInscription} disabled={isParticipant}
      className={`py-2 px-4 rounded mt-4 ${isParticipant ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white font-bold`}
    >
      {isParticipant ? 'Participé' : 'Participer'}
    </button>
  );
};

export default ParticiperButton;
