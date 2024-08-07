require('dotenv').config();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOADS_FOLDER || '../../uploads'); // Utilisez une variable d'environnement ou un chemin par défaut
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Nommez les fichiers de manière unique
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
