
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


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



const soumettreOffre = async (req, res) => {
  const { montantOffre, utilisateurId, enchereId } = req.body;
  try {
    const enchere = await prisma.Enchere.findUnique({
      where: { id: enchereId },
    });

    const now = new Date();

    if (now < new Date(enchere.dateHeureDebut) || now > new Date(enchere.dateHeureFin)) {
      return res.status(400).json({ error: 'Enchère non active' });
    }

    if (montantOffre > enchere.meilleurMontant) {
      const offre = await prisma.Offre.create({
        data: {
          montantOffre,
          dateOffre: new Date(),
          utilisateurId,
          enchereId,
        },
      });

      await prisma.Enchere.update({
        where: { id: enchereId },
        data: {
          meilleurMontant: montantOffre,
        },
      });

      res.status(201).json(offre);
    } else {
      res.status(400).json({ error: 'Le montant de l\'offre doit être supérieur au meilleur montant actuel.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {offreController, soumettreOffre};