
const multer = require('multer');
const path = require('path');

require('dotenv').config();

// Configuration de Multer pour stocker les fichiers dans un dossier temporaire
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.CLOUDINARY_URL || '../../uploads/profiles');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
