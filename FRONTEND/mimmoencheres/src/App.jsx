
import './App.css'

// import ReactDOM from "react-dom/client";
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

import SignUpPage from './connexion/SignUpPage.jsx'
import UIStandard from './UIStandard/UIStandard.jsx';
import LogInPage from './connexion/LogInPage.jsx';

// import Accueil from './UIStandard/Accueil.jsx';
// import Encheres from './UIStandard/Encheres.jsx';
// import Notifications from './UIStandard/Notifications.jsx';
// import Publier from './UIStandard/Publier.jsx';
// import Compte from './UIStandard/Compte.jsx';
// import Apropos from './UIStandard/Apropos.jsx';

// import { Secret } from './connexion/Secret.jsx';

// import { ProtectedRoute } from './connexion/ProtectedRoute.jsx';
import ProtectedRoute from './connexion/ProtectedRoute.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';

import { routes } from './routes';

import { AnnonceProvider } from './context/AnnonceContext.jsx';

function App() {
  

  return (

    <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/login" element={<LogInPage />} />
          <Route path="/dashboard" element={<ProtectedRoute>
            <AnnonceProvider>

              <UIStandard />
            
            </AnnonceProvider>
            
            </ProtectedRoute>}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    
    // <AuthProvider>
    //   <Routes>
        
    //     <Route path="/login" element={<LogInPage />} />

    //     {routes.map(route => (
    //       <Route
    //         key={route.path}
    //         path={route.path}
    //         element={route.protected ? <ProtectedRoute>{route.element}</ProtectedRoute> : route.element}
    //       >
    //         {route.children && route.children.map(child => (
    //           <Route
    //             key={child.path}
    //             path={child.path}
    //             element={child.element}
    //           />
    //         ))}
    //       </Route>
    //     ))}
    //     <Route path="*" element={<Navigate to="/login" />} />
    //   </Routes>
    // </AuthProvider>
    
    
    // <AuthProvider>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/signup" />} />
    //     <Route path="/signup" element={<SignUpPage />} />
    //     <Route path="/login" element={<LogInPage />} />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <ProtectedRoute>
    //             <UIStandard />
                
    //         </ProtectedRoute>
    //       }
    //     >

    //             <Route index element={<Accueil />} />
    //             <Route path="encheres" element={<Encheres />} />
    //             <Route path="notifications" element={<Notifications />} />
    //             <Route path="publier" element={<Publier />} />
    //             <Route path="compte" element={<Compte />} />
    //             <Route path="apropos" element={<Apropos />} /> 
    //     </Route>
    //     <Route path="*" element={<Navigate to="/login" />} />
    //   </Routes>
    // </AuthProvider>


     
  )
}

export default App
