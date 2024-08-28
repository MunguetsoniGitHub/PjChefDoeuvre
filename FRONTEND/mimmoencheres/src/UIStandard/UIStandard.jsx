import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { routes } from '../routes';

const UIStandard = () => {
  
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            src={"https://res.cloudinary.com/maecd11/image/upload/v1720194618/maedev/aquo122gt3x5mjuctj2y.png"}
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
          
          <MdMenuOpen onClick={toggleMenu} className="md:hidden"/>

          {/* Menu déroulant avec options supplémentaires */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-20 flex flex-col justify-center items-center space-y-4 md:hidden">
              {/* Bouton de retour */}
              
              <PiCaretLeftBold onClick={toggleMenu} className="absolute top-4 left-4 " />
              
              <NavLink
                to={`/dashboard/infos-utilisateur`}
                className="hover:text-red-500 text-black text-xl"
                onClick={toggleMenu}
              >
                Mes Informations
              </NavLink>
              
              <p onClick={handleLogout} className="text-red-500 text-xl">
                Déconnexion
              </p>
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