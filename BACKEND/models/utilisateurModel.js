

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

const utilisateurModel = {
  getAllUtilisateurs: async () => {
    console.log('model user');
    try {
      const utilisateurs = await prisma.Utilisateur.findMany();
      return utilisateurs;
    } catch (error) {
      console.log("catcherroe model user", error.toString());
      throw new Error('Une erreur est survenue lors de la récupération des utilisateurs.');
    }
  },

  getUtilisateurById: async (id) => {
    try {
      const utilisateur = await prisma.Utilisateur.findUnique({ where: { id } });
      return utilisateur;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'utilisateur.');
    }
  },

  createUtilisateur: async (data) => {
    try {
      const newUtilisateur = await prisma.Utilisateur.create({ data });
      console.log('Nouvelle utilisateur crée:', newUtilisateur);
      return newUtilisateur;
    } catch (error) {
      console.error('Error in createUtilisateur model:', error);
      throw new Error('Une erreur est survenue lors de la création de l\'utilisateur.');
    }
  },

  updateUtilisateur: async (id, data) => {
    try {
      const updatedUtilisateur = await prisma.Utilisateur.update({ where: { id }, data });
      return updatedUtilisateur;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'utilisateur.');
    }
  },

  deleteUtilisateur: async (id) => {
    try {
      await prisma.Utilisateur.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'utilisateur.');
    }
  }
};

module.exports = utilisateurModel;
