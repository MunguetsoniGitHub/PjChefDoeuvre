import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import React from 'react';

import SignUpPage from './composants/SignUpPage.jsx'
import UIStandard from './UIStandard/UIStandard.jsx';
import LogInPage from './composants/LogInPage.jsx';

import Accueil from './UIStandard/Accueil.jsx';
import Encheres from './UIStandard/Encheres.jsx';
import Notifications from './UIStandard/Notifications.jsx';
import Compte from './UIStandard/Compte.jsx';
import Apropos from './UIStandard/Apropos.jsx';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UIStandard />}>
          <Route index element={<Accueil />} />
          <Route path="encheres" element={<Encheres />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="compte" element={<Compte />} />
          <Route path="apropos" element={<Apropos />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
