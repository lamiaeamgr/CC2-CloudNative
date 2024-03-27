const mongoose = require('mongoose');

const InscScema = new mongoose.Schema({
    utilisateur_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    evenement_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Events'}
});

const InscModel = mongoose.model("Inscription", InscScema);
module.exports = InscModel
