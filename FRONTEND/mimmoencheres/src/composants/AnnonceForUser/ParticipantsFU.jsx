
import React from 'react';

const Participants = ({ participants }) => (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Participants</h3>
    <ul>
      {participants.map((participant) => (
        <li key={participant.id}>
          {participant.nom} - Offre : {participant.offre}
        </li>
      ))}
    </ul>
    <p>Nombre de participants : {participants.length}</p>
  </div>
);

export default Participants;
