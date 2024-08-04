

const express = require('express');
const router = express.Router();

const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); 
// const upload = require('../config/multerConfig'); 

// const upload = require('../middleware/multerConfig');


const {utilisateurController, 
    // getUserAnnonces
    getEncheresByUtilisateur,
    getAnnoncesByUtilisateur,
    upload
} = require('../controllers/utilisateurController');

// GET - Récupérer tous les utilisateurs
router.get('/', utilisateurController.getAllUtilisateurs);

// GET - Récupérer un utilisateur par son ID
router.get('/:id', utilisateurController.getUtilisateurById);

// POST - Créer un nouvel utilisateur
// router.post('/', utilisateurController.createUtilisateur);
router.post('/', upload.single('profileImage'), utilisateurController.createUtilisateur);


// router.get('/:utilisateurId/annonces', getUserAnnonces);


// POST - Créer un utilisateur via /register
// router.post('/register', utilisateurController.createUtilisateur);
// router.post('/register', upload.single('profileImage'), utilisateurController.createUtilisateur);



// PUT - Mettre à jour un utilisateur existant
router.put('/:id', utilisateurController.updateUtilisateur);

// DELETE - Supprimer un utilisateur par son ID
router.delete('/:id', utilisateurController.deleteUtilisateur);

router.get('/:utilisateurId/encheres', getEncheresByUtilisateur);
router.get('/:utilisateurId/annonces', getAnnoncesByUtilisateur);

module.exports = router;
