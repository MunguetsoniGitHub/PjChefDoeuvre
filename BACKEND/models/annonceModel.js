

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const annonceModel = {
  // getAllAnnonces: async () => {
  //   try {
  //     const annonces = await prisma.Annonce.findMany();
  //     return annonces;
  //   } catch (error) {
  //     throw new Error('Une erreur est survenue lors de la récupération des annonces.');
  //   }
  // },

  // getAllAnnonces: async () => {
  //   try {
  //     const annonces = await prisma.Annonce.findMany({
  //       include: { images: true, encheres: true },
  //     });
  //     res.status(200).json(annonces);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Failed to fetch annonces' });
  //   }
  // },

  getAnnonceById: async (id) => {
    try {
      const annonce = await prisma.Annonce.findUnique({ where: { id } });
      return annonce;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'annonce.');
    }
  },

  createAnnonce: async (data) => {
    try {
      const newAnnonce = await prisma.Annonce.create({ data });
      return newAnnonce;

      console.log(`'(model) : reception des données de création de l annonce', ${newAnnonce}`);

    } catch (error) {
      // throw new Error('(model) : Une erreur est survenue lors de la création de l\'annonce.');
      console.error("(model) : erreur survenue lors de la création de l\'annonce dans la BD ", error, Error);
    }
  },


  updateAnnonce: async (id, data) => {
    try {
      const updatedAnnonce = await prisma.Annonce.update({ where: { id }, data });
      return updatedAnnonce;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'annonce.');
    }
  },

  deleteAnnonce: async (id) => {
    try {
      await prisma.Annonce.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'annonce.');
    }
  },

};

module.exports = annonceModel;
