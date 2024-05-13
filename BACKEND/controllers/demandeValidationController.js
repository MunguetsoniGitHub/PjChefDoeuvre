

const demandeValidationModel = require('../models/demandeValidationModel');

const demandeValidationController = {
  async getAllDemandesValidation(req, res) {
    try {
      const demandesValidation = await demandeValidationModel.getAllDemandesValidation();
      res.json(demandesValidation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getDemandeValidationById(req, res) {
    const { id } = req.params;
    try {
      const demandeValidation = await demandeValidationModel.getDemandeValidationById(parseInt(id));
      if (!demandeValidation) {
        return res.status(404).json({ error: 'Demande de validation non trouvée' });
      }
      res.status(200).json(demandeValidation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createDemandeValidation(req, res) {
    const data = req.body;
    try {
      const newDemandeValidation = await demandeValidationModel.createDemandeValidation(data);
      res.status(201).json(newDemandeValidation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateDemandeValidation(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedDemandeValidation = await demandeValidationModel.updateDemandeValidation(parseInt(id), data);
      res.status(200).json(updatedDemandeValidation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteDemandeValidation(req, res) {
    const { id } = req.params;
    try {
      await demandeValidationModel.deleteDemandeValidation(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = demandeValidationController;
