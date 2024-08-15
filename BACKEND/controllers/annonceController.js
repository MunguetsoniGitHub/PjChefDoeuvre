
const { parse } = require('dotenv');
const annonceModel = require('../models/annonceModel');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');

  cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const storage = multer.memoryStorage();
const upload = multer({ storage });



const getAnnonceById = async (req, res) => {
  const data = req.params.id;
  
  try {
    const annonce = await annonceModel.getAnnonceById(data);
    if (!annonce) {
      res.status(404).send('Annonce non trouvée.');
    } else {
      res.json(annonce);
    }
  } catch (error) {
    res.status(500).send('Une erreur est survenue lors de la récupération de l\'annonce.');
  }
};

const createAnnonce = async (req, res) => {
    const { titre, description, typeBien, surface, localisation, proprietaireId, montantDuDepart, dateHeureDebut, dateHeureFin } = req.body;
    
    try {

      console.log("Données de création d'annonce récu", req.body);
      console.log('Fichiers image reçus:', req.files);

      const newAnnonce = await prisma.Annonce.create(

        { data: {titre, description, typeBien, surface: parseFloat(surface), localisation, proprietaireId: parseInt(proprietaireId) },
        }
      );
       
      // const imageFiles = req.files;
      // console.log("fichier image reçu", imageFiles);
      // if (imageFiles) {
      //   const imagePromises = imageFiles.map(file => prisma.Image.create({
      //     data: {
      //       lienImage: file.path,
      //       annonceId: newAnnonce.id,
      //     }
      //   }));
      //   await Promise.all(imagePromises);
      // }


      // Fonction pour télécharger une image sur Cloudinary
      const uploadToCloudinary = (fileBuffer) => {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
            uploadStream.end(fileBuffer);
        });
      };


      // Traiter les fichiers image si présents
      const imageFiles = req.files;
      if (imageFiles && imageFiles.length > 0) {
          const imagePromises = imageFiles.map(async (file) => {
              const result = await uploadToCloudinary(file.buffer);
              return prisma.Image.create({
                  data: {
                      lienImage: result.secure_url,
                      annonceId: newAnnonce.id,
                  }
              });
          });

          await Promise.all(imagePromises);
          console.log("Images de l'annonce créées:", imagePromises);
      }


      // Création de l'enchère associée
      const newEnchere = await prisma.Enchere.create({
        data: {
          montantDuDepart: parseFloat(montantDuDepart),
          meilleurMontant: parseFloat(montantDuDepart), // Initialement, le meilleur montant est le montant de départ
          dateHeureDebut: new Date(dateHeureDebut),
          dateHeureFin: new Date(dateHeureFin),
          // utilisateurId: parseInt(proprietaireId), // Utilisateur qui a créé l'annonce
          annonceId: newAnnonce.id
        }
      });

      res.status(201).json({newAnnonce, newEnchere});     
      
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la création de l\'annonce.' });

      console.error('Une erreur est survenue lors de la création de l\'annonce.',error);
    }
  };



const updateAnnonce = async (req, res) => {
  const annonceId = req.params.id;
//   const nouvelleDonnee = req.body;
const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
  
  try {
    const annonceMiseAJour = await annonceModel.updateAnnonce({annonceId, 
      data : { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId }
    });
    res.json(annonceMiseAJour);
  } catch (error) {
    res.status(500).send('Une erreur est survenue lors de la mise à jour de l\'annonce.');
  }
};

const deleteAnnonce = async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    await annonceModel.deleteAnnonce(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send('Une erreur est survenue lors de la suppression de l\'annonce.');
  }
};

const getAllAnnonces = async (req, res) => {
  try {
    const annonces = await prisma.Annonce.findMany(
      {
      include: { images: true, encheres: true },
      
    }
  // data
  );
    res.status(200).json(annonces);
    console.log(annonces);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch annonces' });
    console.error(error, "erreur lors de récupération des annonces");
  }
};


module.exports = {
  getAnnonceById,
  createAnnonce,
  updateAnnonce,
  deleteAnnonce,
  getAllAnnonces,
  upload
};


  // updateAnnonce: async (req, res) => {
  //   const id = parseInt(req.params.id);
  //   const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
  //   try {
  //     const updatedAnnonce = await prisma.Annonce.update({
  //       where: { id },
  //       data: { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId }
  //     });
  //     res.json(updatedAnnonce);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'annonce.' });
  //   }
  // },

  // updateAnnonce: async (req, res) => {
  //   const annonceId = req.params.id;
  // //   const nouvelleDonnee = req.body;
  // const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
    
  //   try {
  //     const annonceMiseAJour = await annonceModel.updateAnnonce({annonceId, 
  //       data : { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId }
  //     });
  //     res.json(annonceMiseAJour);
  //   } catch (error) {
  //     res.status(500).send('Une erreur est survenue lors de la mise à jour de l\'annonce.');
  //   }
  // },

  // deleteAnnonce: async (req, res) => {
  //   const id = parseInt(req.params.id);
  //   try {
  //     await prisma.Annonce.delete({ where: { id } });
  //     res.status(204).end();
  //   } catch (error) {
  //     res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de l\'annonce.' });
  //   }
  // },

// };
