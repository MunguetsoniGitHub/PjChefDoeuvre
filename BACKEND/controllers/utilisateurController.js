

const utilisateurModel = require('../models/utilisateurModel');

const utilisateurController = {
  getAllUtilisateurs: async (req, res) => {
    try {
      const utilisateurs = await utilisateurModel.getAllUtilisateurs();
      res.json(utilisateurs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUtilisateurById: async (req, res) => {
    const { id } = req.params;
    try {
      const utilisateur = await utilisateurModel.getUtilisateurById(parseInt(id));
      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.status(200).json(utilisateur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUtilisateur: async (req, res) => {
    const data = req.body;
    console.log('Data received for user creation:', data);
    try {
      const newUtilisateur = await utilisateurModel.createUtilisateur(data);
      res.status(201).json(newUtilisateur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUtilisateur: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedUtilisateur = await utilisateurModel.updateUtilisateur(parseInt(id), data);
      res.status(200).json(updatedUtilisateur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUtilisateur: async (req, res) => {
    const { id } = req.params;
    try {
      await utilisateurModel.deleteUtilisateur(parseInt(id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = utilisateurController;
