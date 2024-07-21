  import IMG_0877 from '../assets/ANN/IMG_0877.jpg'
  import IMG_0889 from '../assets/ANN/IMG_0889.jpg'


import React, { useState } from 'react';
import ImageSlider from './Annonce/ImageSlider';
import AnnonceDetails from './Annonce/AnnonceDetails';
import Participants from './Annonce/Participants';
import MeilleureOffre from './Annonce/MeilleureOffre';
import Description from './Annonce/Description';

// const Annonce = ({ page }) => {
//   const [participated, setParticipated] = useState(false);

//   const annonce = {
//     images: [IMG_0877, IMG_0889, 'image3.jpg'],
//     typePropriete: 'Appartement',
//     prixDepart: 100000,
//     palier: 5000,
//     debutEncheres: '2024-05-10',
//     finPrevue: '2024-05-15',
//     etatAnnonce: 'En cours',
//     participants: [
//       { id: 1, nom: 'Alice', offre: 105000 },
//       { id: 2, nom: 'Bob', offre: 110000 },
//     ],
//   };

//   const nombreParticipants = annonce.participants.length;
//   const meilleureOffre = Math.max(...annonce.participants.map(participant => participant.offre));

//   const handleParticipate = () => {
//     setParticipated(true);
//   };

//   return (
//     <div className={`p-4 ${page === 'Encheres' ? 'w-full md:w-1/3 lg:w-1/4 p-4' : 'w-full'}`}>
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <ImageSlider images={annonce.images} />
//         <div className="p-4 flex flex-col">
//           <div className="flex justify-between items-center">
//             <AnnonceDetails
//               typePropriete={annonce.typePropriete}
//               prixDepart={annonce.prixDepart}
//               palier={annonce.palier}
//               debutEncheres={annonce.debutEncheres}
//               finPrevue={annonce.finPrevue}
//               etatAnnonce={annonce.etatAnnonce}
//             />
//             {page === 'Encheres' && (
//               <button
//                 className={`ml-4 ${participated ? 'bg-green-500' : 'bg-red-500'} hover:${participated ? 'bg-green-700' : 'bg-red-700'} text-white font-bold py-1 px-3 rounded`}
//                 onClick={handleParticipate}
//               >
//                 {participated ? 'Participé' : 'Participer'}
//               </button>
//             )}
//           </div>
//           <Participants participants={annonce.participants} />
//           {page === 'Compte' && <MeilleureOffre meilleureOffre={meilleureOffre} onSubmitOffer={() => {}} />}
//           <div className="mt-4">
//             <a
//               href="#"
//               className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 w-full block text-center"
//               onClick={(e) => e.preventDefault()}
//             >
//               Description
//             </a>
//           </div>
//           {page === 'Compte' && <Description />}
//         </div>
//       </div>
//     </div>
  
//   );
// };

const Annonce = ({ annonce, page, 
  // , utilisateurId 
  images
}) => {
  const [participated, setParticipated] = useState(false);

  return (
    <div className={`max-w-4xl mx-auto my-8 px-4 ${page === 'encheres' ? 'w-1/3' : ''}`}>
      <ImageSlider 
      // images={annonce.images} 
      annonce={annonce}

      images={images}
      />
      <AnnonceDetails
        annonce={annonce}
        page={page}
        // utilisateurId={utilisateurId}
        setParticipated={setParticipated}
      />
      {page === 'compte' && participated && (
        <>
          <MeilleureOffre meilleureOffre={annonce.meilleureOffre} />
          <Participants participants={annonce.participants} />
        </>
      )}
      <Description />
    </div>
  );
};

export default Annonce;

