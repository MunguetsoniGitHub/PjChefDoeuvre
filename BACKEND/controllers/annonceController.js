
const { parse } = require('dotenv');
const annonceModel = require('../models/annonceModel');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



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

// const createAnnonce = async (req, res) => {

//   // const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
//   // console.log("Données de création d'annonce récu", titre, description, typeBien, surface, localisation, prixInitial, proprietaireId);
//   const data = req.body;
//   console.log("Données de création d'annonce récu", data);
  

//   try {
//           const newAnnonce = await annonceModel.createAnnonce(
//             data
//           // {
//           //   // data: { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId }
    
//           //   // data: {titre, description, typeBien, surface: parseFloat(surface), localisation, prixInitial: parseFloat(prixInitial), proprietaireId: parseInt(proprietaireId)},
    
//           // }
//           );
      
//           const imageFiles = req.files;
//           console.log("fichier image reçu", imageFiles);
//           if (imageFiles) {
//             const imagePromises = imageFiles.map(file => prisma.Image.create({
//               data: {
//                 lienImage: file.path,
//                 annonceId: newAnnonce.id,
//               }
//             }));
//             await Promise.all(imagePromises);
//           }
      

//     res.status(201).json(newAnnonce);
//   } catch (error) {
//     res.status(500).send('Une erreur est survenue lors de l\'ajout de l\'annonce.');
//     console.log("(controller) : erreur survenue lors de l'ajout de l'annonce", error );
//   }
// };

const createAnnonce = async (req, res) => {
    const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
    
    try {

      console.log("Données de création d'annonce récu", req.body);
      console.log('Fichiers image reçus:', req.files);

      const newAnnonce = await prisma.Annonce.create(

        { data: {titre, description, typeBien, surface: parseFloat(surface), localisation, prixInitial: parseFloat(prixInitial), proprietaireId: parseInt(proprietaireId) },
        }
      );

      // const newAnnonce = {titre, description,typeBien, surface: parseFloat(surface), localisation, prixInitial: parseFloat(prixInitial), proprietaireId: parseInt(proprietaireId), 
      //   images: req.files.map(file => ({ path: file.path })) 
      // };

      // const annonceCree = await annonceModel.createAnnonce(newAnnonce);
      // res.status(201).json(annonceCree);
       

      const imageFiles = req.files;
      console.log("fichier image reçu", imageFiles);
      if (imageFiles) {
        const imagePromises = imageFiles.map(file => prisma.Image.create({
          data: {
            lienImage: file.path,
            annonceId: newAnnonce.id,
          }
        }));
        await Promise.all(imagePromises);
      }

      res.status(201).json(newAnnonce);     
      
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

const participate = async (req, res) => {
  const { utilisateurId, annonceId } = req.body;
  try {
    const participation = await prisma.Enchere.create({
      data: {
        utilisateurId: Number(utilisateurId),
        annonceId: Number(annonceId),
        montantEnchere: 0,
        dateEnchere: new Date(),
      },
    });
    res.status(201).json(participation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to participate' });
  }
};

const removeParticipation = async (req, res) => {
  const { utilisateurId, annonceId } = req.body;
  try {
    await prisma.Enchere.deleteMany({
      where: {
        utilisateurId: Number(utilisateurId),
        annonceId: Number(annonceId),
      },
    });
    res.status(200).json({ message: 'Participation removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove participation' });
  }
};

const checkParticipation = async (req, res) => {
  const { utilisateurId, annonceId } = req.query;
  try {
    const participation = await prisma.Enchere.findFirst({
      where: {
        utilisateurId: Number(utilisateurId),
        annonceId: Number(annonceId),
      },
    });
    res.status(200).json({ participating: !!participation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check participation' });
  }
};


module.exports = {
  getAnnonceById,
  createAnnonce,
  updateAnnonce,
  deleteAnnonce,
  // annonceController,
  getAllAnnonces,
  participate,
  removeParticipation,
  checkParticipation,
  
};

// const annonceController = {
  
  // getAllAnnonces: async (req, res) => {
  //   try {
  //     const annonces = await prisma.Annonce.findMany();
  //     res.json(annonces);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des annonces.' });
  //   }
  // },


  // createAnnonce: async (req, res) => {
  //   const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
  //   console.log("Données de création d'annonce récu", titre, description, typeBien, surface, localisation, prixInitial, proprietaireId);
  //   try {
  //     const newAnnonce = await prisma.Annonce.create({

        // data: {titre, description, typeBien, surface: parseFloat(surface), localisation, prixInitial: parseFloat(prixInitial), proprietaireId: parseInt(proprietaireId) },

  //     });

  //     const imageFiles = req.files;
  //     console.log("fichier image reçu", imageFiles);
  //     if (imageFiles) {
  //       const imagePromises = imageFiles.map(file => prisma.Image.create({
  //         data: {
  //           lienImage: file.path,
  //           annonceId: newAnnonce.id,
  //         }
  //       }));
  //       await Promise.all(imagePromises);
  //     }

  //     res.status(201).json(newAnnonce);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Une erreur est survenue lors de la création de l\'annonce.' });

  //     console.log('Une erreur est survenue lors de la création de l\'annonce.',error);
  //   }
  // },

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
