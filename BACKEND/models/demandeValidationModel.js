
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const demandeValidationModel = {
  getAllDemandesValidation: async () => {
    try {
      const demandesValidation = await prisma.demandeValidation.findMany();
      return demandesValidation;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des demandes de validation.');
    }
  },

  getDemandeValidationById: async (id) => {
    try {
      const demandeValidation = await prisma.demandeValidation.findUnique({ where: { id } });
      return demandeValidation;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de la demande de validation.');
    }
  },

  createDemandeValidation: async (data) => {
    try {
      const newDemandeValidation = await prisma.demandeValidation.create({ data });
      return newDemandeValidation;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de la demande de validation.');
    }
  },

  updateDemandeValidation: async (id, data) => {
    try {
      const updatedDemandeValidation = await prisma.demandeValidation.update({ where: { id }, data });
      return updatedDemandeValidation;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de la demande de validation.');
    }
  },

  deleteDemandeValidation: async (id) => {
    try {
      await prisma.demandeValidation.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de la demande de validation.');
    }
  },
};

module.exports = demandeValidationModel;
