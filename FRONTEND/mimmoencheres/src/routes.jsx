

import SignUpPage from './connexion/SignUpPage';
import LogInPage from './connexion/LogInPage';
import UIStandard from './UIStandard/UIStandard';
import Accueil from './UIStandard/Accueil';
import Encheres from './UIStandard/Encheres';
import Notifications from './UIStandard/Notifications';
import Publier from './UIStandard/Publier';
import Compte from './UIStandard/Compte';
import Apropos from './UIStandard/Apropos';

import  ProtectedRoute from './connexion/ProtectedRoute';

import InfosUtilisateur from './UIStandard/InfosUtilisateur';

export const routes = [
  // {
  //   path: '/',
  //   element: <LogInPage />,
  //   protected: false,
  //   name: 'Connexion'
  // },
  // {
  //   path: '/signup',
  //   element: <SignUpPage />,
  //   protected: false,
  //   name: 'Inscription'
  // },
  // {
  //   path: '/login',
  //   element: <LogInPage />,
  //   protected: false,
  //   name: 'Connexion'
  // },
  // {
  //   path: '/dashboard',
  //   element: 
  //   <ProtectedRoute>
  //     <UIStandard />
  //   </ProtectedRoute>
  //     ,
  //   protected: true,
  //   name: 'Tableau de bord',
  //   children: [
      { path: '', element: Accueil , protected: true, name: 'Accueil' },
      { path: 'encheres', element: Encheres , protected: true,
        name: 'Enchères' },
      { path: 'notifications', element: Notifications , protected: true,
        name: 'Notifications' },
      { path: 'publier', element: Publier , protected: true,
        name: 'Publier' },
      { path: 'compte', element: Compte ,  protected: true,
        name: 'Compte' },
      { path: 'apropos', element: Apropos , protected: true,
        name: 'À propos' },

      { path: 'infos-utilisateur', element: InfosUtilisateur, protected: true }
  //   ],
  // },
];