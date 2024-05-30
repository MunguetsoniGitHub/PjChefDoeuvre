import React from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth } from "../hooks/useAuth";
import { useForm } from 'react-hook-form';

export const LogInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      alert("Invalid email or password");
    }
  };
  
  return (
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
        <Link to="../UIStandard/UIStandard" className="text-blue-500 hover:underline">Créer un compte</Link>
      </div>
    </div>
  );
};

export default LogInPage;
