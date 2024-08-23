import React from "react";
import { Footer } from "../composants/Footer/Footer";

const Apropos = () => {
    return (
        <div className="flex flex-col h-max bg-gray-100 py-8">
            <div className="container mx-auto py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 flex flex-col gap-8">
                <div className="mb-4 flex flex-col gap-8 py-8">
                    <h2 className="text-xl font-bold mb-2 text-center">Qui sommes-nous ?</h2>
                    <p className="text-gray-700">
                        MimmoEnchères est une plateforme des ventes aux enchères spécialisée dans l’acquisition et ventes des biens immobiliers.
                    </p>
                </div>

                <div className="mb-4 flex flex-col gap-8 py-8">
                    <h2 className="text-xl font-bold mb-2 text-center">Notre Mission</h2>
                    <p className="text-gray-700">
                        Notre mission est d’assurer la fiabilité des annonces avant de valider leurs affichages sur notre plateforme, d’assurer le fonctionnement du processus mis en place pour gérer les enchères, et de mettre en relation les vendeurs et acheteurs pour pouvoir conclure la vente et l'acquisition respectivement pour ces deux acteurs. C’est ainsi que nous sommes désireux de continuer d’échanger, de consigner et de partager avec notre clientèle et nos partenaires.
                    </p>
                </div>

                <div className="flex flex-col mb-4 gap-8 py-8">
                    <h2 className="text-xl font-bold mb-2 text-center">Nos services</h2>
                    <p className="text-gray-700">
                        Nous œuvrons pour vous offrir sur la plateforme que voici :
                    </p>

                    <ol className="flex flex-col gap-4 list-decimal px-4">
                        <li>
                            Les services de publications d’une annonce immobilière aux enchères, le processus allant de la présentation de titre de propriété immobilière (Certificat d’Enregistrement de Concession Perpétuelle ou Ordinaire) auprès de nos services dans votre ville pour vérification.
                        </li>

                        <li>
                            Les services d’achat (acquisition) sur une annonce par la meilleure offre aux enchères, avec pour ambition de vous aider à poursuivre les processus qui visent à mettre en relation les deux parties pour conclure la vente et l’acquisition auprès de nos services dans votre ville avec l’entremise des services compétents aux Affaires Foncières.
                        </li>
                    </ol>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Apropos;
