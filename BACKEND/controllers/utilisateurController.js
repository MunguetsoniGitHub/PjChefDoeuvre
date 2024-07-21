
const utilisateurModel = require('../models/utilisateurModel');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

const bcrypt = require('bcrypt');

// const {body, validationResult } = require('express-validator');
// const validator = require('validator');



const utilisateurController = {
  getAllUtilisateurs: async ( res) => {
    console.log('yes yes getAllUti');
    try {
      const utilisateurs = await utilisateurModel.getAllUtilisateurs();
      console.log("utili", utilisateurs);
      res.json(utilisateurs);
    } catch (error) {
      console.log('ggggggg', error.toString());
      res.status(500).json({ error: error.message });
    }
  },

  getUtilisateurById: async (req, res) => {
    const { id } = req.params;
    try {
      const utilisateur = await utilisateurModel.getUtilisateurById(parseInt(id));
      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.status(200).json(utilisateur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUtilisateur: async (req, res) => {
    const data = req.body;
    console.log('Data received for user creation:', data);
// // Définition des règles de validation
// const validationRules = [
//   body('email').isEmail().withMessage('L\'adresse email est invalide'),
//   body('motDePasse').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
//   // Ajoutez d'autres règles de validation selon vos besoins
// ];

// // Appliquer les règles de validation à la requête
// await Promise.all(validationRules.map(rule => rule.run(req)));

// // Vérifier s'il y a des erreurs de validation
// const errors = validationResult(req);
// if (!errors.isEmpty()) {
//   return res.status(400).json({ errors: errors.array() });
// }


    try {

      // if (data.dateNaissance) {
      //   data.dateNaissance = new Date(data.dateNaissance).toISOString();;
      // }
      
      const saltRounds = 10;
      data.motDePasse = await bcrypt.hash(data.motDePasse, saltRounds);

      const newUtilisateur = await utilisateurModel.createUtilisateur(data);
      res.status(201).json(newUtilisateur);
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log("erreur lors de creation de l'utilisateur ", error);
    }
  },

  updateUtilisateur: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedUtilisateur = await utilisateurModel.updateUtilisateur(parseInt(id), data);
      res.status(200).json(updatedUtilisateur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUtilisateur: async (req, res) => {
    const { id } = req.params;
    try {
      await utilisateurModel.deleteUtilisateur(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};


// Récupération des annonces en lien avec l'utilisateur

const getUserAnnonces = async (req, res) => {
  const { utilisateurId } = req.params;
  try {
    const utilisateur = await prisma.Utilisateur.findUnique({
      where: { id: Number(utilisateurId) },
      include: {
        encheres: {
          include: {
            annonce: true,
          },
        },
      },
    });
    if (utilisateur) {
      const annonces = utilisateur.encheres.map((enchere) => enchere.annonce);
      res.status(200).json(annonces);
    } else {
      res.status(404).json({ error: 'Utilisateur not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch annonces for user' });
  }
};


module.exports = {
  utilisateurController,
  getUserAnnonces
};
