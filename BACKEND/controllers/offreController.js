



const offreModel = require('../models/offreModel');

const offreController = {
  async getAllOffres(req, res) {
    try {
      const offres = await offreModel.getAllOffres();
      res.json(offres);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getOffreById(req, res) {
    const { id } = req.params;
    try {
      const offre = await offreModel.getOffreById(parseInt(id));
      if (!offre) {
        return res.status(404).json({ error: 'Offre non trouvée' });
      }
      res.status(200).json(offre);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createOffre(req, res) {
    const data = req.body;
    try {
      const newOffre = await offreModel.createOffre(data);
      res.status(201).json(newOffre);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateOffre(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedOffre = await offreModel.updateOffre(parseInt(id), data);
      res.status(200).json(updatedOffre);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteOffre(req, res) {
    const { id } = req.params;
    try {
      await offreModel.deleteOffre(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = offreController;
