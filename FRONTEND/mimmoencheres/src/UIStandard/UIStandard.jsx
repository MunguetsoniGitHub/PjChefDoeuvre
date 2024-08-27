// import MimmoEncheres from '../assets/MimmoEncheres.png'

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { routes } from '../routes';

const UIStandard = () => {
  
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

   // Trouver les enfants des routes du tableau de bord qui sont protégés
  //  const dashboardRoute = routes.find(route => route.path === '/dashboard');
  //  const protectedRoutes = dashboardRoute?.children.filter(route => route.protected) || [];
 
  //  console.log("Protected routes:", protectedRoutes);

return (
    
    // <div className="w-screen h-max flex flex-col">
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* <header className="relative top-0 left-0 h-full w-screen"> */}
      <header className="w-full relative flex flex-col gap-8">
        <nav className="w-full fixed top-0 left-0 flex justify-between items-center bg-white p-4 text-black shadow-lg z-10">
          {/* Logo */}
          <img
            src={"https://res.cloudinary.com/djlamvqne/image/upload/v1720194618/maedev/aquo122gt3x5mjuctj2y.png"}
            alt="logo"
            className="h-8"
          />

          {/* Onglets de navigation visibles */}
          <div className="hidden md:flex space-x-4">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={`/dashboard/${route.path}`}
                className="hover:text-red-500 text-lg text-black"
                activeClassName="active"
              >
                {route.name}
              </NavLink>
            ))}
          </div>

          {/* Bouton Menu pour mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              Menu
            </button>
          </div>

          {/* Menu déroulant avec seulement le bouton Déconnexion */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-white shadow-lg z-20 p-4 flex flex-col space-y-2 md:hidden">
              <button onClick={handleLogout} className="text-red-500">
                Déconnexion
              </button>
            </div>
          )}

          {/* Bouton Déconnexion pour écrans plus grands */}
          <button onClick={handleLogout} className="hidden md:block text-red-500">
            Déconnexion
          </button>
        </nav>

        {/* Onglets sous la barre de navigation en mode mobile, scrollable horizontalement */}
        {/* <div className="md:hidden flex overflow-x-auto space-x-4 bg-white shadow-md p-2 ">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={`/dashboard/${route.path}`}
              className="hover:text-red-500 text-lg text-black "
              activeClassName="active"
            >
              {route.name}
            </NavLink>
          ))}
        </div> */}
      </header>
      <main className="relative flex-1 mt-16 overflow-auto py-5">
        <div className="md:hidden bg-white shadow-lg z-10 flex flex-row space-x-4 p-2 overflow-x-auto ">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={`/dashboard/${route.path}`}
                className="hover:text-red-500  text-black"
                activeClassName="active"
              >
                {route.name}
              </NavLink>
            ))}
          </div>
          <Outlet />
      </main>
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