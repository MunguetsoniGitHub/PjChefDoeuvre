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
      <header className="w-full relative top-0 left-0">
       {/* <nav className="w-screen fixed top-0 left-0 flex justify-between items-center bg-white p-4 text-black  shadow-lg"> */}
       <nav className="w-full fixed top-0 left-0 flex justify-between items-center bg-white p-4 text-black shadow-lg z-10">
        {/* <span className="text-lg "> */}
          <img src={"https://res.cloudinary.com/djlamvqne/image/upload/v1720194618/maedev/aquo122gt3x5mjuctj2y.png"} alt="logo"/> 
          {/* </span> */}
        <div className="hidden md:flex space-x-4 ">
            {/* <NavLink to="/" activeClassName="active" className="hover:text-red-500 text-lg text-black">Accueil</NavLink>
            <NavLink to="/encheres" activeClassName="active" className="hover:text-red-500 text-lg text-black">Enchères</NavLink>
            <NavLink to="/notifications" activeClassName="active" className="hover:text-red-500 text-lg text-black">Notifications</NavLink>
            <NavLink to="/publier" activeClassName="active" className="hover:text-red-500 text-lg text-black">Publier</NavLink>
            <NavLink to="/compte" activeClassName="active" className="hover:text-red-500 text-lg text-black">Compte</NavLink>
            <NavLink to="/apropos" activeClassName="active" className="hover:text-red-500 text-lg text-black">A propos</NavLink> */}
        
            {/* {routes.map(route => (
              <NavLink key={route.path} to={route.path} activeClassName="active" className="hover:text-red-500 text-lg text-black">
                {route.path === '/' ? 'Accueil' : route.path.replace('/', '').toUpperCase()}
              </NavLink>
            ))} */}

{/*             2ème

            {protectedRoutes.map(route => (
              <NavLink key={route.path} to={`/dashboard${route.path}`} activeClassName="active" 
              // className="hover:text-red-500 text-lg text-black"
              className={({ isActive }) => (isActive ? 'active' : '')}
              
              >
                {route.name}
              </NavLink>
            ))} */}

              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={`/dashboard/${route.path}`}
                  // className={({ isActive }) => (isActive ? 'active' : '')}
                  className="hover:text-red-500 text-lg text-black"
                  activeClassName="active"
                >
                  {route.name}
                </NavLink>
              ))}

        </div>
        <button onClick={handleLogout} className='color[FF0303]'>Déconnexion</button>
      </nav>
      </header>
      <main className="relative flex-1 mt-16 overflow-auto">
      {/* <Outlet className=" p-50" />  */}
      <Outlet className=" p-50"/>
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