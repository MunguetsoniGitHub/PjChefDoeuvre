

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const annonceModel = {
  getAllAnnonces: async () => {
    try {
      const annonces = await prisma.annonce.findMany();
      return annonces;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des annonces.');
    }
  },

  getAnnonceById: async (id) => {
    try {
      const annonce = await prisma.annonce.findUnique({ where: { id } });
      return annonce;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'annonce.');
    }
  },

  createAnnonce: async (data) => {
    try {
      const newAnnonce = await prisma.annonce.create({ data });
      return newAnnonce;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de l\'annonce.');
    }
  },

  updateAnnonce: async (id, data) => {
    try {
      const updatedAnnonce = await prisma.annonce.update({ where: { id }, data });
      return updatedAnnonce;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'annonce.');
    }
  },

  deleteAnnonce: async (id) => {
    try {
      await prisma.annonce.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'annonce.');
    }
  }
};

module.exports = annonceModel;
