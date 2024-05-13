


const imageModel = require('../models/imageModel');

const imageController = {
  async getAllImages(req, res) {
    try {
      const images = await imageModel.getAllImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

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
    const data = req.body;
    try {
      const updatedImage = await imageModel.updateImage(parseInt(id), data);
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
    }
  },
};

module.exports = imageController;
