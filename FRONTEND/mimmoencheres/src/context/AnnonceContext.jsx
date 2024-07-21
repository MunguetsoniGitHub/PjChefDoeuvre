

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AnnonceContext = createContext();

const AnnonceProvider = ({ children }) => {
  const [annonces, setAnnonces] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // const fetchAnnonces = async () => {
    const fetchAnnonces = async () => {
      try {
        // // const response = await axios.get('http://localhost:3000/api/annonces');
        // // const annoncesWithImages = await Promise.all(
        // //     response.data.map(async (annonce) => {
        // //       const imagesResponse = await axios.get(`http://localhost:3000/api/images/annonce/${annonce.id}`);
        // //       return { ...annonce, images: imagesResponse.data };
        // //     })
        // //   );

        // const [annoncesResponse, imagesResponse] = await Promise.all([
        //     axios.get('http://localhost:3000/api/annonces'),
        //     axios.get('http://localhost:3000/api/images/annonce/${annonce.id}')
        //   ]);

        //   setAnnonces(annoncesResponse.data);
        //   setImages(imagesResponse.data);
          
        // //   setAnnonces(annoncesWithImages);
        
        // // setAnnonces(response.data);

        const [annoncesResponse] = await Promise.all([
            axios.get('http://localhost:3000/api/annonces'),
          ]);
  
          setAnnonces(annoncesResponse.data);
  
          const imagesPromises = annoncesResponse.data.map(annonce =>
            axios.get(`http://localhost:3000/api/images/annonce/${annonce.id}`)
          );
  
          const imagesResponses = await Promise.all(imagesPromises);
  
          const annoncesWithImages = annoncesResponse.data.map((annonce, index) => ({
            ...annonce,
            images: imagesResponses[index].data,
          }));
  
          setAnnonces(annoncesWithImages);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      } 
    //   finally {
    //     setLoading(false);
    //   }
    };

    // fetchAnnonces();
    fetchAnnonces();
  }, []);

  return (
    <AnnonceContext.Provider value={{ annonces, images, loading, error }}>
      {children}
    </AnnonceContext.Provider>
  );
};

export { AnnonceContext, AnnonceProvider };
