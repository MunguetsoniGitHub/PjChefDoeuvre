

const enchereModel = require('../models/enchereModel');

const enchereController = {
  async getAllEncheres(req, res) {
    try {
      const encheres = await enchereModel.getAllEncheres();
      res.json(encheres);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getEnchereById(req, res) {
    const { id } = req.params;
    try {
      const enchere = await enchereModel.getEnchereById(parseInt(id));
      if (!enchere) {
        return res.status(404).json({ error: 'Enchère non trouvée' });
      }
      res.status(200).json(enchere);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createEnchere(req, res) {
    const data = req.body;
    try {
      const newEnchere = await enchereModel.createEnchere(data);
      res.status(201).json(newEnchere);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateEnchere(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedEnchere = await enchereModel.updateEnchere(parseInt(id), data);
      res.status(200).json(updatedEnchere);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteEnchere(req, res) {
    const { id } = req.params;
    try {
      await enchereModel.deleteEnchere(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = enchereController;
