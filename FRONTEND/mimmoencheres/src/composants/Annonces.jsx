

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';

import '../../../node_modules/swiper/modules/navigation.min.css';
import '../../../node_modules/swiper/modules/pagination.min.css';

import  Navigation from '../../../node_modules/swiper/modules/navigation.mjs';
import Pagination from '../../../node_modules/swiper/modules/pagination.mjs';

// import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import SwiperCore from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const Annonce = () => {
  // Données fictives d'une annonce
  const annonce = {
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    typePropriete: 'Appartement',
    prixDepart: 100000,
    palier: 5000,
    debutEncheres: '2024-05-10',
    finPrevue: '2024-05-15',
    etatAnnonce: 'En cours',
    participants: [
      { id: 1, nom: 'Alice', offre: 105000 },
      { id: 2, nom: 'Bob', offre: 110000 },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }}>
        {annonce.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{annonce.typePropriete}</h2>
        <p>Prix de départ : {annonce.prixDepart}</p>
        <p>Palier : {annonce.palier}</p>
        <p>Début des enchères : {annonce.debutEncheres}</p>
        <p>Fin prévue : {annonce.finPrevue}</p>
        <p>État de l'annonce : {annonce.etatAnnonce}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Participer</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">Description</button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Participants</h3>
        <ul>
          {annonce.participants.map((participant) => (
            <li key={participant.id}>
              {participant.nom} - Offre : {participant.offre}
            </li>
          ))}
        </ul>
        <input type="number" placeholder="Votre offre" className="w-64 py-2 px-4 border border-gray-300 rounded mt-4" />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Votre offre</button>
      </div>
    </div>
  );
};

export default Annonce;
