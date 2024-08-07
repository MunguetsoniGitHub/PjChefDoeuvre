



const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const offreModel = {
  getAllOffres: async () => {
    try {
      const offres = await prisma.Offre.findMany();
      return offres;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des offres.');
    }
  },

  getOffreById: async (id) => {
    try {
      const offre = await prisma.Offre.findUnique({ where: { id } });
      return offre;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'offre.');
    }
  },

  createOffre: async (data) => {
    try {
      const newOffre = await prisma.Offre.create({ data });
      return newOffre;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de l\'offre.');
    }
  },

  updateOffre: async (id, data) => {
    try {
      const updatedOffre = await prisma.Offre.update({ where: { id }, data });
      return updatedOffre;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'offre.');
    }
  },

  deleteOffre: async (id) => {
    try {
      await prisma.Offre.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'offre.');
    }
  },
};

module.exports = offreModel;
