



const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const paiementsAcompteModel = {
  getAllPaiementsAcompte: async () => {
    try {
      const paiementsAcompte = await prisma.PaiementsAcompte.findMany();
      return paiementsAcompte;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des paiements d\'acompte.');
    }
  },

  getPaiementsAcompteById: async (id) => {
    try {
      const paiementsAcompte = await prisma.PaiementsAcompte.findUnique({ where: { id } });
      return paiementsAcompte;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération du paiement d\'acompte.');
    }
  },

  createPaiementsAcompte: async (data) => {
    try {
      const newPaiementsAcompte = await prisma.PaiementsAcompte.create({ data });
      return newPaiementsAcompte;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création du paiement d\'acompte.');
    }
  },

  updatePaiementsAcompte: async (id, data) => {
    try {
      const updatedPaiementsAcompte = await prisma.PaiementsAcompte.update({ where: { id }, data });
      return updatedPaiementsAcompte;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour du paiement d\'acompte.');
    }
  },

  deletePaiementsAcompte: async (id) => {
    try {
      await prisma.PaiementsAcompte.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression du paiement d\'acompte.');
    }
  },
};

module.exports = paiementsAcompteModel;
