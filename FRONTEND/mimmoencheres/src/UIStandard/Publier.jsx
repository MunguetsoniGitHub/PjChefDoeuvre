import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const Publier = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('description', data.description);
    formData.append('typeBien', data.typeBien);
    formData.append('surface', data.surface);
    formData.append('localisation', data.localisation);
    // formData.append('prixInitial', data.prixInitial);
    formData.append('proprietaireId', user.id);

    formData.append('montantDuDepart', data.montantDuDepart);
    formData.append('dateHeureDebut', data.dateHeureDebut);
    formData.append('dateHeureFin', data.dateHeureFin);

    Array.from(data.images).forEach((image) => {
      formData.append('images', image);
    });

    console.log('FormData avant envoi:', Array.from(formData.entries()));

    try {
      const response = await axios.post("http://localhost:3000/api/annonces", formData, {
      // const response = await axios.post("http://localhost:3000/api/annonces", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log("Annonce publiée:", response.data);
      reset();
    } catch (error) {
      console.error("Erreur de publication", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Publier une annonce</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            type="text"
            name="titre"
            {...register('titre', { required: "Le titre est requis" })}
            placeholder="Titre"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.titre && <p className="text-red-500 text-sm">{errors.titre.message}</p>}
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            {...register('description', { required: "La description est requise" })}
            placeholder="Description"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="typeBien"
            {...register('typeBien', { required: "Le type de bien est requis" })}
            placeholder="Type de bien"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.typeBien && <p className="text-red-500 text-sm">{errors.typeBien.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="surface"
            step="0.01"
            {...register('surface', { required: "La surface est requise" })}
            placeholder="Surface (m²)"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.surface && <p className="text-red-500 text-sm">{errors.surface.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="localisation"
            {...register('localisation', { required: "La localisation est requise" })}
            placeholder="Localisation"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.localisation && <p className="text-red-500 text-sm">{errors.localisation.message}</p>}
        </div>
        {/* <div className="mb-4">
          <input
            type="number"
            name="prixInitial"
            step="0.01"
            {...register('prixInitial', { required: "Le prix initial est requis" })}
            placeholder="Prix initial"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.prixInitial && <p className="text-red-500 text-sm">{errors.prixInitial.message}</p>}
        </div> */}

        <div className="mb-4">
          <input
            type="number"
            name="montantDuDepart"
            step="0.01"
            {...register('montantDuDepart', { required: "Le montant de départ est requis" })}
            placeholder="Prix initial"
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.montantDuDepart && <p className="text-red-500 text-sm">{errors.montantDuDepart.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="datetime-local"
            name="dateHeureDebut"
            {...register('dateHeureDebut', { required: "La date et l'heure de début sont requises" })}
            className="border border-gray-300 p-2 w-full rounded" placeholder="Début des enchères"
          />
          {errors.dateHeureDebut && <p className="text-red-500 text-sm">{errors.dateHeureDebut.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="datetime-local"
            name="dateHeureFin"
            {...register('dateHeureFin', { required: "La date et l'heure de fin sont requises" })}
            className="border border-gray-300 p-2 w-full rounded" placeholder="Fin prévue"
          />
          {errors.dateHeureFin && <p className="text-red-500 text-sm">{errors.dateHeureFin.message}</p>}
        </div>  

        <div className="mb-4">
          <input
            type="file"
            name="images"
            {...register('images', { required: "Les images sont requises" })}
            multiple
            className="border border-gray-300 p-2 w-full rounded"
          />
          {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Publier
        </button>
      </form>
    </div>
  );
};

export default Publier;

