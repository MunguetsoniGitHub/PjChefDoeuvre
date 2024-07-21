
// import React from 'react';

// const MeilleureOffre = ({ meilleureOffre, onSubmitOffer }) => (
//   <div className="mt-4">
//     <p>Meilleure offre : {meilleureOffre}</p>
//     <input type="number" placeholder="Votre offre" className="w-64 py-2 px-4 border border-gray-300 rounded mt-4" />
//     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={onSubmitOffer}>
//       Soumettre votre offre
//     </button>
//   </div>
// );

// export default MeilleureOffre;

import React from 'react';

const MeilleureOffre = ({ meilleureOffre }) => (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Meilleure Offre</h3>
    <p>{meilleureOffre}</p>
  </div>
);

export default MeilleureOffre;
