

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imageModel = {
  getAllImages: async () => {
    try {
      const images = await prisma.image.findMany();
      return images;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des images.');
    }
  },

  getImageById: async (id) => {
    try {
      const image = await prisma.image.findUnique({ where: { id } });
      return image;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'image.');
    }
  },

  createImage: async (data) => {
    try {
      const newImage = await prisma.image.create({ data });
      return newImage;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de l\'image.');
    }
  },

  updateImage: async (id, data) => {
    try {
      const updatedImage = await prisma.image.update({ where: { id }, data });
      return updatedImage;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'image.');
    }
  },

  deleteImage: async (id) => {
    try {
      await prisma.image.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'image.');
    }
  },
};

module.exports = imageModel;
