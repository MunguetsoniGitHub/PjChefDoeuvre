
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../../hooks/useAuth';

const ParticiperButton = ({ annonceId, utilisateurId, setParticipated }) => {
  
  const {user} = useAuth();  // ajout recent
  
  const [participating, setParticipating] = useState(false);

  useEffect(() => {
    
    const checkParticipation = async () => {
      try {
        const response = await axios.get(`/api/annonces/checkParticipation`, {
          params: { utilisateurId, annonceId },
        });
        setParticipating(response.data.participating);
      } catch (error) {
        console.error('Failed to check participation:', error);
      }
    };
    checkParticipation();
  }, [utilisateurId, annonceId]);

  const handleParticipate = async () => {

    const utilisateurId = user.id;    // ajout recent

    try {
      const response = await axios({
        method: participating ? 'delete' : 'post',
        url: '/api/participer',
        data: { utilisateurId, annonceId },
      });
      if (response.status === 200 || response.status === 201) {
        setParticipating(!participating);
        if (setParticipated) setParticipated(!participating);
      } else {
        console.error('Failed to update participation status:', response.data);
      }
    } catch (error) {
      console.error('Error updating participation status:', error);
    }
  };

  return (
    <button
      onClick={handleParticipate}
      className={`py-2 px-4 rounded mt-4 ${participating ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} text-white font-bold`}
    >
      {participating ? 'Participé' : 'Participer'}
    </button>
  );
};

export default ParticiperButton;
