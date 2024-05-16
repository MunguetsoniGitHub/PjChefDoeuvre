import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import React from 'react';

import SignUpPage from './connexion/SignUpPage.jsx'
import UIStandard from './UIStandard/UIStandard.jsx';
import LogInPage from './connexion/LogInPage.jsx';

import Accueil from './UIStandard/Accueil.jsx';
import Encheres from './UIStandard/Encheres.jsx';
import Notifications from './UIStandard/Notifications.jsx';
import Compte from './UIStandard/Compte.jsx';
import Apropos from './UIStandard/Apropos.jsx';

// import { Secret } from './connexion/Secret.jsx';
import { ProtectedRoute } from './connexion/ProtectedRoute.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';

function App() {
  

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
                  {/* <Secret /> */}
                <Route path="/" element={<UIStandard />} />
                <Route index element={<Accueil />} />
                <Route path="encheres" element={<Encheres />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="compte" element={<Compte />} />
                <Route path="apropos" element={<Apropos />} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
     
  )
}

export default App
