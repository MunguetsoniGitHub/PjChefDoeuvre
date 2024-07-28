

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AnnonceContext = createContext();

const AnnonceProvider = ({ children }) => {
  const [annonces, setAnnonces] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [encheres, setEncheres] = useState([]);


  useEffect(() => {
    
    const fetchAnnonces = async () => {
      try {

          const [annoncesResponse] = await 
          Promise.all([axios.get('http://localhost:3000/api/annonces')]);

          setAnnonces(annoncesResponse.data);

        // const response = await Promise.all([axios.get('http://localhost:3000/api/annonces')]) ;
        // const annoncesData = response.data;
        // setAnnonces(annoncesData);
       
          const imagesPromises = annoncesResponse.data.map(annonce =>
            axios.get(`http://localhost:3000/api/images/annonce/${annonce.id}`)
          );
          // const imagesPromises = annoncesData.map(annonce =>
          //   Promise.all([ axios.get(`http://localhost:3000/api/images/annonce/${annonce.id}`) 
          // ]));
  
          const imagesResponses = await Promise.all(imagesPromises);
  
        //   const annoncesWithImages = annoncesResponse.data.map((annonce, index) => ({
        //     ...annonce,
        //     images: imagesResponses[index].data,
        //   }));
        //   setAnnonces(annoncesWithImages);

        const encheresPromises = annoncesResponse.data.map(annonce => 
           axios.get(`http://localhost:3000/api/enchere/${annonce.id}`) );
        const encheresResponses = await Promise.all(encheresPromises); 

        // const encheresData = annoncesData.flatMap(annonce => annonce.encheres);
        // const encheresData = annoncesResponse.data.flatMap(annonce => annonce.encheres);

        const annoncesWithDetails = annoncesResponse.data.map((annonce, index) => ({
          ...annonce,
          images: imagesResponses[index].data,
          
          encheres : encheresResponses[index].data
        }));

        setAnnonces(annoncesWithDetails);
        setImages(imagesResponses.map(response => response.data));
        // setEncheres(encheresData);
        setEncheres(encheresResponses.map(response => response.data));

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);

        console.log(error, 'erreur dans fetchAnnonces');
      } 

    };

    fetchAnnonces();
  }, []);

  return (
    <AnnonceContext.Provider value={{ annonces, images,  encheres, loading, error }}>
      {children}
    </AnnonceContext.Provider>
  );
};

export { AnnonceContext, AnnonceProvider };
