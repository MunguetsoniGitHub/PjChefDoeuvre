

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [profileImage, setProfileImage] = useState(null);

  const onSubmit = async (data) => {

    if (data.motDePasse !== data.confirmationMotDePasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
  
  const { confirmationMotDePasse, ...userData } = data;

    // const dateNaissance = new Date(data.dateNaissance).toISOString();
  
    // if (userData.dateNaissance) {
    //   userData.dateNaissance = new Date(userData.dateNaissance).toISOString();
    // }

  // const formData = new FormData();
  // Object.keys(userData).forEach((key) => {
  //   formData.append(key, userData[key]);
  // });
  
  // if (profileImage) {
  //   formData.append('profileImage', profileImage);
  // }

  // for (const key in userData) {
  //   formData.append(key, userData[key]);
  // }
  // if (profileImage[0]) {
  //   formData.append('profileImage', profileImage[0]);
  // }

  const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (data.profileImage[0]) {
      formData.append('profileImage', data.profileImage[0]);
    }
    

    try {
      console.log('Submitting data:', data);
      // const response = await axios.post('http://localhost:3000/api/utilisateurs', userData, {
        const response = await axios.post('http://localhost:3000/api/utilisateurs', formData, {
        
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        }, 
      }
      );
      console.log('Utilisateur créé:', response.data);
      
    } catch (error) {
      console.error(error.message);
      
    }
  };

  return (
    <div className="flex w-screen h-screen max-h-full bg-white">
      
      <div className="w-1/2 h-full bg-cover bg-center rounded-r-full" style={{ backgroundImage: 'url("https://res.cloudinary.com/djlamvqne/image/upload/v1720176205/maedev/aoh44txcf6vrfxvlj1gu.jpg")' }}>
      </div>

      <div className="w-1/2 h-full flex items-center justify-center p-6 bg-white">

      <div className="max-w-lg mx-auto p-6 rounded shadow">
        <h2 className="text-2xl mb-4">Créer un compte</h2>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="mb-4">
            <input type="text" name="prenom" placeholder="Prénom" {...register('prenom', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.prenom && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="text" name="nom" placeholder="Nom" {...register('nom', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.nom && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="text" name="postnom" placeholder="Postnom" {...register('postnom', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.postnom && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="text" name="adresse" placeholder="Adresse" {...register('adresse', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.adresse && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="text" name="numeroTel" placeholder="Numéro de téléphone" {...register('numeroTel', { required: true, pattern: /^\d{10}$/ })} className="border border-gray-300 p-2 w-full rounded" />
              {errors.numeroTel && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" {...register('email', { required: true })}  className="border border-gray-300 p-2 w-full rounded" />
              {errors.email && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="date" name="dateNaissance" placeholder="Date de naissance" {...register('dateNaissance', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.dateNaissance && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="password" name="motDePasse" placeholder="Mot de passe" {...register('motDePasse', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.motDePasse && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="mb-4">
            <input type="password" name="confirmationMotDePasse" placeholder="Confirmation mot de passe" {...register('confirmationMotDePasse', { required: true })} className="border border-gray-300 p-2 w-full rounded" />
            {errors.confirmationMotDePasse && <span className="text-red-500">Ce champ est requis</span>}
          </div>

          {/* <div className="mb-4">
              <input type="file" name="profileImage" onChange={(e) => setProfileImage(e.target.files[0])} className="border border-gray-300 p-2 w-full rounded" />
          </div> */}

            <div className="mb-4">
              <input type="file" name="profileImage" {...register('profileImage')} className="border border-gray-300 p-2 w-full rounded" />
            </div>
          
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Créer un compte</button>
        </form>
        <div className="mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Se connecter avec Google</button>
        </div>
        <div className="mt-2 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Se connecter</Link>
        </div>
      </div>

      </div>

    </div>
  );
};

export default SignUpPage;
