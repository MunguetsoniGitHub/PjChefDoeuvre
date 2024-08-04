

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../node_modules/swiper/swiper-bundle.min.css';

import '../../../node_modules/swiper/modules/navigation.min.css';
import '../../../node_modules/swiper/modules/pagination.min.css';

import  Navigation from '../../../node_modules/swiper/modules/navigation';
import Pagination from '../../../node_modules/swiper/modules/pagination';

// import  { Navigation, Pagination } from 'swiper';

import SwiperCore from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const ImageSlider = ({ annonce, images, enchere, page,
  annonceForUser, imagesForUser, enchereForUser
}) =>  (
  
  // page === 'encheres' ?
  <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]}  >

    { images.map((image) => (
    
      <SwiperSlide key={image.id}>

        <img src={`http://localhost:3000/uploads/${image.lienImage}`} alt={annonce.titre} className="w-full" />

      </SwiperSlide>
    ))}
  </Swiper>
  //  : page === 'compte' ?
  
  // <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]}  >

  // { imagesForUser.map((image) => (
  
  //   <SwiperSlide key={image.id}>

  //     <img src={`http://localhost:3000/uploads/${image.lienImage}`} alt={annonceForUser.titre} className="w-full" />

  //   </SwiperSlide>
  // ))}
  // </Swiper> : ''
);

export default ImageSlider;
