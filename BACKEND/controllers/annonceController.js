


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const annonceController = {
  getAllAnnonces: async (req, res) => {
    try {
      const annonces = await prisma.annonce.findMany();
      res.json(annonces);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des annonces.' });
    }
  },

  getAnnonceById: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const annonce = await prisma.annonce.findUnique({ where: { id } });
      res.json(annonce);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de l\'annonce.' });
    }
  },

  createAnnonce: async (req, res) => {
    const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
    try {
      const newAnnonce = await prisma.annonce.create({
        data: { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId }
      });
      res.status(201).json(newAnnonce);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la création de l\'annonce.' });
    }
  },

  updateAnnonce: async (req, res) => {
    const id = parseInt(req.params.id);
    const { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId } = req.body;
    try {
      const updatedAnnonce = await prisma.annonce.update({
        where: { id },
        data: { titre, description, typeBien, surface, localisation, prixInitial, proprietaireId }
      });
      res.json(updatedAnnonce);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de l\'annonce.' });
    }
  },

  deleteAnnonce: async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      await prisma.annonce.delete({ where: { id } });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de l\'annonce.' });
    }
  }
};

module.exports = annonceController;
