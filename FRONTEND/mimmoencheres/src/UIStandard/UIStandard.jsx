
// import Accueil from "/Accueil.jsx"
// import Encheres from "/Encheres.jsx";
// import Notifications from "/Notifications.jsx";
// import Compte from "/Compte.jsx";
// import Apropos from "/Apropos.jsx";

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const UIStandard = () => {
  
 
return (
    
    <div className="w-screen h-max flex flex-col">
      <header className="relative top-0 left-0 h-full w-screen">
       <nav className="w-screen fixed top-0 left-0 flex justify-between items-center bg-white p-4 text-black  shadow-lg">
        <span className="text-lg">MimmoEnchères</span>
        <div className="hidden md:flex space-x-4">
            <NavLink to="/" activeClassName="active" className="hover:text-red-500">Accueil</NavLink>
            <NavLink to="/encheres" activeClassName="active" className="hover:text-red-500">Enchères</NavLink>
            <NavLink to="/notifications" activeClassName="active" className="hover:text-red-500">Notifications</NavLink>
            <NavLink to="/compte" activeClassName="active" className="hover:text-red-500">Compte</NavLink>
            <NavLink to="/apropos" activeClassName="active" className="hover:text-red-500">A propos</NavLink>
        </div>
        <button >Déconnexion</button>
      </nav>
      </header>
    
      <Outlet className=" p-50" /> {/* Le contenu de la page sera affiché ici en fonction du routage */}
      <style>
        {`
          .active {
            border-bottom: 2px solid red;
          }
        `}
      </style>
    </div>
  );
};

export default UIStandard;