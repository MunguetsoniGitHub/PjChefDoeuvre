const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const imageModel = require('../models/imageModel');


const getImagesByAnnonceId = async (req, res) => {
  const { annonceId } = req.params;
  try {
    const images = await prisma.Image.findMany({
      where: { annonceId: parseInt(annonceId, 10) }
    });

    // // Nettoyer le chemin des images
    // const cleanedImages = images.map(image => ({
    //   ...image,
    //   lienImage: image.lienImage.replace(/\\/g, '/')
    // }));

    // res.status(200).json(cleanedImages);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des images.' });
    console.error('Erreur lors de la récupération des images.', error);
  }
};

const imageController = {
  // async getAllImages( res) {
  //   try {
  //     const images = await imageModel.getAllImages();
  //     res.json(images);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // },

  async getImageById(req, res) {
    const { id } = req.params;
    try {
      const image = await imageModel.getImageById(parseInt(id));
      if (!image) {
        return res.status(404).json({ error: 'Image non trouvée' });
      }
      res.status(200).json(image);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createImage(req, res) {
    const data = req.body;
    try {
      const newImage = await imageModel.createImage(data);
      res.status(201).json(newImage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateImage(req, res) {
    const { id } = req.params;
    // const data = req.body;
    const { lienImage } = req.body;
    try {
      const updatedImage = await imageModel.updateImage(parseInt(id), lienImage );
      res.status(200).json(updatedImage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteImage(req, res) {
    const { id } = req.params;
    try {
      await imageModel.deleteImage(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error('Erreur lors de la suppression de l\'image.', error);
    }
  },
};

module.exports = {
  imageController,
  getImagesByAnnonceId
};
