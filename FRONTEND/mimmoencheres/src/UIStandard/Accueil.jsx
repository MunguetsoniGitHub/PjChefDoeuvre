

import React from "react";
import NousChoisir from "../composants/Accueil/NousChoisir";
import { Footer } from "../composants/Footer/Footer";

const Accueil = () => {



    return(
      <div className="flex flex-col h-full bg-gray-100 overflow-x-hidden">
      <div
  className="bg-gradient-to-r from-blue-500 to-green-500 text-white h-96 px-4 py-20 sm:px-20 lg:px-40 flex flex-col lg:flex-row gap-6 justify-center items-center relative"
  style={{
          backgroundImage: 'url("https://res.cloudinary.com/maecd11/image/upload/v1720194581/maedev/lvrhhn7czavwtitav6u2.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: '500px', // Fixer la hauteur
        }}
      >
      
      <div className="border-solid border-2 shadow-md rounded-lg p-4 w-96  bg-gray-mae flex items-center justify-center h-48">
          <h3 className="text-red-mae font-bold text-2xl  font-kaushan text-center w-full">
            Profitez d'une meilleure expérience sur notre plateforme des ventes immobilières aux enchères.
          </h3>
      </div>
      {/* max-w-xs */}
      <div className="border-solid border-2 shadow-md rounded-lg p-4 w-96  bg-white flex items-center justify-center h-48 hidden sm:flex">
          <h3 className="text-black font-bold text-2xl font-kaushan text-center w-full">
            Vous avez donc la possibilité de l'enchérir à une vente ou de mettre en vente votre propriété.
          </h3>
       </div>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-20 lg:px-40">
        <p className="text-center">
          N'hésitez pas à dérouler les annonces afin d'apprécier les offres en lançant une recherche avec les options qui vous conviennent, et participer aux enchères d’une annonce en cliquant sur le bouton d'action "participer" et poursuivez cette annonce dans l'onglet/page "Compte" pour pouvoir enchérir avant la fin de cette dernière.
        </p>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-20 lg:px-40 flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-6 text-center">Pourquoi choisir MimmoEnchères</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NousChoisir title="Annonces" lorem="Enchères transparentes et en temps réel pour une expérience d'achat immobilière immersive." />
          <NousChoisir title="Fiabilité" lorem="Accompagnement dans le processus d'achat, après paiement d'acompte." />
          <NousChoisir title="Expérience utilisateur" lorem="Interface utilisateur intuitive et responsive pour une navigation fluide et agréable." />
        </div>
      </div>

      <div
        className="container mx-auto gap-6 py-12 px-4 sm:px-20 lg:px-40 flex flex-col sm:flex-row justify-center items-center"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/maecd11/image/upload/v1720176204/maedev/zsrkqfagmxt5au6lfvc0.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border-solid border-2 border-white shadow-md rounded-lg p-4 max-w-xs w-full mb-4 sm:mb-0">
          <h3 className="text-white font-bold text-center">
            Profitez d'une meilleure expérience sur notre plateforme des ventes immobilières aux enchères.
          </h3>
        </div>

        <div className="border-solid border-2 border-white shadow-md rounded-lg p-4 max-w-xs w-full">
          <h3 className="text-white font-bold text-center">
            Vous avez donc la possibilité de l'enchérir à une vente ou de mettre en vente votre propriété.
          </h3>
        </div>
      </div>

      <Footer />
    </div>
    )
}

export default Accueil;