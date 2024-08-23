const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enchereModel = require('../models/enchereModel');

const enchereController = {
  async getAllEncheres(req, res) {
    try {
      const encheres = await enchereModel.getAllEncheres();
      res.json(encheres);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getEnchereById(req, res) {
    const { id } = req.params;
    try {
      const enchere = await enchereModel.getEnchereById(parseInt(id));
      if (!enchere) {
        return res.status(404).json({ error: 'Enchère non trouvée' });
      }
      res.status(200).json(enchere);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createEnchere(req, res) {
    const data = req.body;
    try {
      const newEnchere = await enchereModel.createEnchere(data);
      res.status(201).json(newEnchere);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateEnchere(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedEnchere = await enchereModel.updateEnchere(parseInt(id), data);
      res.status(200).json(updatedEnchere);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteEnchere(req, res) {
    const { id } = req.params;
    try {
      await enchereModel.deleteEnchere(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};


// const inscrireUtilisateur = async (req, res) => {
const inscrireEnchere = async (req, res) => {
  // const { annonceId } = req.params;
  const { enchereId } = req.params;
  const { utilisateurId, 
    // enchereId //nouvel ajout
  } = req.body;


  try {
    const enchere = await prisma.Enchere.findUnique({
      where: { id: parseInt(enchereId) },
    });

    // const enchere = await prisma.Enchere.findUnique({
    //   where: { annonceId: parseInt(annonceId) },
    // });

    if (!enchere) {
      return res.status(404).json({ error: 'Enchère non trouvée' });
    }

    // Vérifier si l'utilisateur est déjà inscrit à cette enchère
    const participationExistante = await prisma.Participation.findUnique({
      where: {
        utilisateurId_enchereId: {
          utilisateurId: parseInt(utilisateurId),
          enchereId: parseInt(enchereId),
        },
      },
    });

    if (participationExistante) {
      // Si l'utilisateur est déjà inscrit, renvoyez un message ou une erreur
      return res.status(400).json({ error: 'Utilisateur déjà inscrit à cette enchère' });
    }

    // Sinon, inscrire l'utilisateur à l'enchère

    await prisma.Enchere.update({
      where: { id: parseInt(enchereId) },
      // where: { annonceId: parseInt(annonceId) },
      data: {
        utilisateurId: parseInt(utilisateurId),
      },
    });


    await prisma.Participation.create({
      
            data: {
              utilisateurId:parseInt(utilisateurId),
              enchereId: parseInt(enchereId),
            },
          });

    res.status(200).json({ message: 'Utilisateur inscrit à l\'enchère avec succès' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifierParticipation = async (req, res) => {
  const { enchereId, utilisateurId } = req.params;

  try {
    const participation = await prisma.Participation.findUnique({
      where: {
        utilisateurId_enchereId: {
          utilisateurId: parseInt(utilisateurId),
          enchereId: parseInt(enchereId),
        },
      },
    });

    const isParticipant = participation ? true : false;

    res.status(200).json({ isParticipant });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Récupérer les détails d'une enchère
const getEnchereDetails = async (req, res) => {
  try {
    const enchere = await prisma.Enchere.findMany({
      where: { annonceId: parseInt(req.params.annonceId) },
      // where: { id: parseInt(req.params.enchereId) },

      // include: { utilisateur: true } // Inclure l'utilisateur qui a créé l'enchère
      // include: { utilisateurId: true, annonceId : true  
      // } // Inclure l'utilisateur et l'annonce associés à l'enchère
    });
    if (!enchere) {
      return res.status(404).json({ error: 'Enchère non trouvée' });
    }
    res.json(enchere);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


// Récupérer les offres pour une enchère
const getOffres = async (req, res) => {
  try {
    const offres = await prisma.Offre.findMany({
      where: { enchereId: parseInt(req.params.annonceId) },
      // where: { enchereId: parseInt(req.params.enchereId) },

      include: { utilisateur: true } // Inclure l'utilisateur qui a fait l'offre
    });
    res.json(offres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

module.exports = {enchereController, 
  // inscrireUtilisateur, 
  getEnchereDetails, getOffres,inscrireEnchere, verifierParticipation};