

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imageModel = {
  getAllImages: async () => {
    try {
      const images = await prisma.Image.findMany();
      return images;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération des images.');
    }
  },

  getImageById: async (id) => {
    try {
      const image = await prisma.Image.findUnique({ where: { id } });
      return image;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de l\'image.');
    }
  },

  createImage: async (data) => {
    try {
      const newImage = await prisma.Image.create({ data });
      return newImage;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la création de l\'image.');
    }
  },

  updateImage: async (id, data) => {
    try {
      const updatedImage = await prisma.Image.update({ where: { id }, data });
      return updatedImage;
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la mise à jour de l\'image.');
    }
  },

  deleteImage: async (id) => {
    try {
      await prisma.Image.delete({ where: { id } });
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la suppression de l\'image.');
    }
  },
};

module.exports = imageModel;
