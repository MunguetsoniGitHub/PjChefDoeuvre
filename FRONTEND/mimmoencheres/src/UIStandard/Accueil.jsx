

import React from "react";
import NousChoisir from "../composants/Accueil/NousChoisir";
import { Footer } from "../composants/Footer/Footer";

const Accueil = () => {



    return(
    <div className=" flex flex-col h-max bg-gray-100">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white h-96 px-40 flex flex-row gap-6"  style={{ backgroundImage: 'url("https://res.cloudinary.com/djlamvqne/image/upload/v1720194581/maedev/lvrhhn7czavwtitav6u2.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
      
        <div className="border-solid border-2 shadow-md rounded-lg p-4 h-48 w-450px absolute bottom-1/4 left-72 bg-gray-mae flex items-center">
            <h3 className="text-red-mae font-bold mb-2 font-kaushan text-center text-3xl">Profiter d'une meilleure expérience sur notre plateforme des ventes immobilières aux enchères. </h3>
        </div>
        
        <div className="border-solid border-2 shadow-md rounded-lg p-4 h-48 w-450px absolute bottom-1/4 right-72 bg-white flex items-center">
            <h3 className="text-black font-bold mb-2 font-kaushan  text-center text-3xl">Vous avez donc la possibilité de l'enchérir à une vente ou de mettre en vente votre propriété. </h3>
        </div>
      </div>

      <div className="container mx-auto py-12 px-40 h-72 flex flex-row items-end">
        <p>N'hésitez pas à dérouler les annonces afin d'apprécier les offres en lançant une recherche avec les options qui vous convient, et participer aux enchères d’une annonce en cliquant sur le bouton d'action "participer" et poursuivez cette annonce dans l'onglet/page "Compte" pour pouvoir enchérir avant la fin de cette dernière. </p>
      </div>

      <div className="container mx-auto py-12 px-40 h-96 flex flex-col justify-around">
        <h2 className="text-3xl font-bold mb-6 text-center">Pourquoi choisir MimmoEnchères</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">       
          <NousChoisir title="Annonces" lorem="Enchères transparentes et en temps réel pour une expérience d'achat immobilière immersive." />
          <NousChoisir title="Fiabilité" lorem="Accompagnement dans le processus d'achat, après paiement d'acompte." />
          <NousChoisir title="Expérience utilisateur" lorem="Interface utilisateur intuitive et responsive pour une navigation fluide et agréable." />           
        </div>
      </div>

      <div className="container mx-auto gap-6 py-12 px-40 flex h-56 text-center items-center"  style={{ backgroundImage: 'url("https://res.cloudinary.com/djlamvqne/image/upload/v1720176204/maedev/zsrkqfagmxt5au6lfvc0.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'  }} >
        
        <div className="border-solid border-2 border-white shadow-md rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Profiter d'une meilleure expérience sur notre plateforme des ventes immobilières aux enchères. </h3>
        </div>
        
        <div className="border-solid border-2 border-white shadow-md rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Vous avez donc la possibilité de l'enchérir à une vente ou de mettre en vente votre propriété. </h3>
        </div>
        
      </div>

      <Footer />

    </div>
    )
}

export default Accueil;