const mongoose = require('mongose');

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  email: String,
  login: String,
  mdp: String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
