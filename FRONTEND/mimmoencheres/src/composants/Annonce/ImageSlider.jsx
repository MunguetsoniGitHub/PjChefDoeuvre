

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

const ImageSlider = ({ annonce
  ,images 
}) => (
  <Swiper spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]}  >
    {/* {images.map((image, index) => ( */}
    { annonce.images.map((image) => (
    // {/* {images
    //           .filter((image) => image.annonceId === annonce.id)
    //           .map((image) => ( */}
      <SwiperSlide key={image.id}
      // key={index}
      >
        <img src={`http://localhost:3000/uploads/${image.lienImage}`} alt={annonce.titre}
        // src={image} alt={`Image ${index + 1}`} 
        className="w-full" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageSlider;
