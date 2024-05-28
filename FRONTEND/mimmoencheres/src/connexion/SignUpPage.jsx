

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    if (data.motDePasse !== data.confirmationMotDePasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
  // Supprimer confirmationMotDePasse avant d'envoyer les données au backend
  const { confirmationMotDePasse, ...userData } = data;

    // const dateNaissance = new Date(data.dateNaissance).toISOString();

    try {
      console.log('Submitting data:', data);
      const response = await axios.post('http://localhost:3000/utilisateurs/register', userData, {
        withCredentials: true, // Activer les credentials pour CORS)
    });
      console.log('Utilisateur créé:', response.data);
      // Rediriger ou afficher un message de succès
    } catch (error) {
      console.error(error.message);
      // Afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <div className="flex w-screen h-screen max-h-full bg-white">
      <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl mb-4">Créer un compte</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default SignUpPage;
