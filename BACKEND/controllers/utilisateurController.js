
const utilisateurModel = require('../models/utilisateurModel');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
// const cloudinary = require('../cloudinaryConfig');

const multer = require('multer');
const path = require('path');

  cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const storage = multer.memoryStorage();

const upload = multer({ storage });

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

      // if (req.file) {

      //   console.log('Uploading file to Cloudinary:', req.file.path);

      //   const result = await cloudinary.uploader.upload(req.file.path);

      //   console.log('Upload result:', result);

      //   data.profileImageUrl = result.secure_url;
      // } else {
      //   console.log('No file uploaded');
      // }

      // console.log('User data to save:', data);

      if (req.file) {
        console.log('Uploading file to Cloudinary');
        const result = await cloudinary.uploader.upload_stream((error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            res.status(500).json({ error: 'Cloudinary upload failed' });
          } else {
            console.log('Upload result:', result);
            data.profileImageUrl = result.secure_url;
            saveUser();
          }
        }).end(req.file.buffer);
      } else {
        console.log('No file uploaded');
        saveUser();
      }

      const saveUser = async () => {
        console.log('User data to save:', data);

        const newUtilisateur = await utilisateurModel.createUtilisateur(data);
        console.log('Nouvelle utilisateur crée:', newUtilisateur);
        res.status(201).json(newUtilisateur);
      };


      // const newUtilisateur = await utilisateurModel.createUtilisateur(data);
      // res.status(201).json(newUtilisateur);
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

// const getUserAnnonces = async (req, res) => {
//   const { utilisateurId } = req.params;
//   try {
//     const utilisateur = await prisma.Utilisateur.findUnique({
//       where: { id: Number(utilisateurId) },
//       include: {
//         encheres: {
//           include: {
//             annonce: true,
//           },
//         },
//       },
//     });
//     if (utilisateur) {
//       const annonces = utilisateur.encheres.map((enchere) => enchere.annonce);
//       res.status(200).json(annonces);
//     } else {
//       res.status(404).json({ error: 'Utilisateur not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch annonces for user' });
//   }
// };

const getAnnoncesByUtilisateur = async (req, res) => {
  const { utilisateurId } = req.params;

  try {
    const annonces = await prisma.Annonce.findMany({
      where: { proprietaireId: parseInt(utilisateurId) },
      include: {
        encheres: true,
        images: true,
      },
    });

    res.status(200).json(annonces);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getEncheresByUtilisateur = async (req, res) => {
  const { utilisateurId } = req.params;

  try {
    const participations = await prisma.Participation.findMany({
      where: { utilisateurId: parseInt(utilisateurId) },
      include: {
        enchere: {
          include: {
            annonce: true,
            offres: true,
          },
        },
      },
    });

    const encheres = participations.map(participation => participation.enchere);

    res.status(200).json(encheres);

   
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  utilisateurController,
  // getUserAnnonces
  getEncheresByUtilisateur,
  getAnnoncesByUtilisateur,
  upload
};
