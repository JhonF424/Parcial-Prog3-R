
const express = require('express');
const router = express.Router();
const routerApi = require('.');
const pokemonSchema = require('../models/pokemon.model');

//Filtro para buscar facturas a través del PokeIndex 

router.get('/:indexP', (req, res) => {
    const { indexP } = req.params;
    pokemonSchema.find({ 'Game_Info.Pokedex_Number': indexP })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


//Métodos CRUD 

router.get('/all', (req, res) => {
    pokemonSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.post('/create', (req, res) => {
    const pokemon = pokemonSchema(req.body);
    pokemon.save()
        .then((data) => res.json({message:data}))
        .catch((error) => res.json({ message: error }));

});

router.put('/edit/:pokemonID', (req, res) => {
    const { pokemonID } = req.params;
    const {
        Name,
        Element,
        Skills = {
            tipo,
            Moves: [],

        },
        Game_info = {
            Stats: {
                Pokemon_Stats: {
                    HP,
                    Attack,
                    Defense,
                    Sp_Atk,
                    Sp_Def,
                    Speed
                }
            },
            Region,
            Pokedex_Index
        }
    } = req.body;
    pokemonSchema
        .updateOne(
            { _id: pokemonID },
            { $set: { Name, Element, Skills, Game_info } }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete('/delete/:pokemonID', (req, res) => {
    const { pokemonID } = req.params;
    pokemonSchema
        .deleteOne({ _id: pokemonID })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router; 
