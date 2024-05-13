



const paiementsAcompteModel = require('../models/paiementsAcompteModel');

const paiementsAcompteController = {
  async getAllPaiementsAcompte(req, res) {
    try {
      const paiementsAcompte = await paiementsAcompteModel.getAllPaiementsAcompte();
      res.json(paiementsAcompte);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getPaiementsAcompteById(req, res) {
    const { id } = req.params;
    try {
      const paiementsAcompte = await paiementsAcompteModel.getPaiementsAcompteById(parseInt(id));
      if (!paiementsAcompte) {
        return res.status(404).json({ error: 'Paiement d\'acompte non trouvé' });
      }
      res.status(200).json(paiementsAcompte);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createPaiementsAcompte(req, res) {
    const data = req.body;
    try {
      const newPaiementsAcompte = await paiementsAcompteModel.createPaiementsAcompte(data);
      res.status(201).json(newPaiementsAcompte);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updatePaiementsAcompte(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedPaiementsAcompte = await paiementsAcompteModel.updatePaiementsAcompte(parseInt(id), data);
      res.status(200).json(updatedPaiementsAcompte);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deletePaiementsAcompte(req, res) {
    const { id } = req.params;
    try {
      await paiementsAcompteModel.deletePaiementsAcompte(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = paiementsAcompteController;
