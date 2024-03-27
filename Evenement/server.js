const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3011;

const EventModel = require('./model');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/addEvent', async (req, res) => {
    const event = EventModel.findOne({ titre: req.body.titre });

    const { titre,
        description,
        date,
        lieu,
        categorie } = req.body;
    if (event) {
        res.json({ message: 'Existed Event!' })
    }

    await EventModel.create({
        titre,
        description,
        date,
        lieu,
        categorie
    })
        .then(event => res.json(event))
        .catch(err => res.json(err));

});

app.get('/event/:id', (req, res) => {
    const event_id = req.params.id;

    EventModel.findOne({ _id: event_id })
        .then(event => res.json(event))
        .catch(err => res.json(err));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})