import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from "../hooks/useAuth";
import { useForm } from 'react-hook-form';

export const LogInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      await login(data);
      navigate('/dashboard');
    } catch (error) {
      console.error("Login error", error);
      alert("Invalid email or password");
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="flex w-screen h-screen h-full bg-white overflow-hidden">
      
      {/* Container global, qui change de structure selon la taille de l'écran */}
      <div className="w-full h-screen flex flex-col md:flex-row">
        
        {/* Image de fond, avec le formulaire en mode responsive */}
        <div 
          className={`h-full w-full md:w-1/2 bg-cover bg-center bg-fixed flex items-center justify-center ${isMobile ? 'p-6 overflow-y-scroll' : 'rounded-r-full'}`}
          style={{ backgroundImage: 'url("https://res.cloudinary.com/maecd11/image/upload/v1720176205/maedev/aoh44txcf6vrfxvlj1gu.jpg")' }}
        >
          {/* Formulaire de connexion en mode responsive */}
          <div className={`w-full max-w-lg mx-auto p-6  rounded  ${!isMobile ? 'hidden' : ''}`}>
            <h2 className="text-2xl mb-4">Se connecter</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register('email', { required: "Email is required" })}
                  className="border border-gray-300 p-2 w-full rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="motDePasse"
                  placeholder="Mot de passe"
                  {...register('motDePasse', { required: "Password is required" })}
                  className="border border-gray-300 p-2 w-full rounded"
                />
                {errors.motDePasse && <p className="text-red-500 text-sm">{errors.motDePasse.message}</p>}
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Connexion
              </button>
            </form>
            <div className="mt-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Connexion avec Google
              </button>
            </div>
            <div className="mt-2 text-center">
              <Link to="/signup" className="text-blue-500 hover:underline">Créer un compte</Link>
            </div>
          </div>
        </div>
  
        {/* Formulaire de connexion en mode desktop, caché en mode responsive */}
        <div className={`w-1/2 h-full flex items-center justify-center p-6 overflow-y-scroll bg-white ${isMobile ? 'hidden' : ''}`}>
          <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">Se connecter</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register('email', { required: "Email is required" })}
                  className="border border-gray-300 p-2 w-full rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="motDePasse"
                  placeholder="Mot de passe"
                  {...register('motDePasse', { required: "Password is required" })}
                  className="border border-gray-300 p-2 w-full rounded"
                />
                {errors.motDePasse && <p className="text-red-500 text-sm">{errors.motDePasse.message}</p>}
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Connexion
              </button>
            </form>
            <div className="mt-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Connexion avec Google
              </button>
            </div>
            <div className="mt-2 text-center">
              <Link to="/signup" className="text-blue-500 hover:underline">Créer un compte</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
