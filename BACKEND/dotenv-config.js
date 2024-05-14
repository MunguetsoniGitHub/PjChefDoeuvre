

require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

module.exports = {
  databaseUrl,
};

