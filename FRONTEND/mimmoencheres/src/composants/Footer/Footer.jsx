import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className="bg-white text-black py-6">
            <div className="flex flex-col sm:flex-row sm:justify-center py-8 h-full">
                <div className="bg-black shadow-md rounded-lg px-12 py-4 text-center flex flex-col w-full sm:w-1/3">
                    <h3 className="text-white font-bold mb-2 text-lg">Notre adresse</h3>
                    <div className="flex flex-col h-full justify-center">
                        <div className="flex gap-6">
                            <FaMapMarkerAlt fill="white" size={20} />       
                            <p className="text-white">TP Kingabwa-Limete, Kinshasa.</p>
                        </div>
                    </div>
                </div> 

                <div className="bg-black shadow-md rounded-lg px-12 py-4 text-center flex flex-col w-full sm:w-1/3">
                    <h3 className="text-white font-bold mb-2 text-lg">Contactez-nous</h3>
                    <div className="flex flex-col h-full justify-center"> 
                        <div className="flex gap-6">
                            <FaWhatsapp fill="white" size={20} />       
                            <p className="text-white">+243 817355577</p>
                        </div>
                        <div className="flex gap-6">
                            <SiGmail fill="white" size={20} />       
                            <p className="text-white">mimmoencheres@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black shadow-md rounded-lg px-12 py-4 text-center flex flex-col w-full sm:w-1/3">
                    <h3 className="text-white font-bold mb-2 text-lg">Suivez-nous</h3>
                    <div className="flex flex-col h-full justify-center">
                        <div className="flex gap-6">
                            <FaFacebookF fill="white" size={20} />       
                            <p className="text-white">Mimmoencheres</p>
                        </div>
                        <div className="flex gap-6">
                            <FaInstagram fill="white" size={20} />       
                            <p className="text-white">mimmoencheres</p>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="container mx-auto text-center text-red-mae">
                <p>&copy; 2024 MimmoEncheres - Tous droits réservés</p>
            </div>
        </footer>
    )
}
