
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enchereModel = {
  getAllEncheres: async () => {
    try {
      const encheres = await prisma.Enchere.findMany();
      return encheres;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des enchères.');
    }
  },

  getEnchereById: async (id) => {
    try {
      const enchere = await prisma.Enchere.findUnique({ where: { id } });
      return enchere;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'enchère.');
    }
  },

  createEnchere: async (data) => {
    try {
      const newEnchere = await prisma.Enchere.create({ data });
      return newEnchere;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de l\'enchère.');
    }
  },

  updateEnchere: async (id, data) => {
    try {
      const updatedEnchere = await prisma.Enchere.update({ where: { id }, data });
      return updatedEnchere;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'enchère.');
    }
  },

  deleteEnchere: async (id) => {
    try {
      await prisma.Enchere.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'enchère.');
    }
  },
};

module.exports = enchereModel;
