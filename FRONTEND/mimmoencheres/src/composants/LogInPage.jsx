



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const LogInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" />
        </div>
        <div className="mb-4">
          <input type="password" name="motDePasse" placeholder="Mot de passe" value={formData.motDePasse} onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connexion</button>
      </form>
      <div className="mt-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Connexion avec Google</button>
      </div>
      <div className="mt-2 text-center">
        <Link to="../UIStandard/UIStandard" className="text-blue-500 hover:underline">Créer un compte</Link>
      </div>
    </div>
  );
};

export default LogInPage;
