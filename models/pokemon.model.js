
const mongoose = require('mongoose');
const pokemonSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Element: {
        type: String,
        require: true,
    },
    Skills: {
        type: Object,
        require: true,
        tipo: {
            type: String,
            require: true,
        },
        Moves: {
            type: Array,
            require: true
        }
    },
    Game_Info: {
        type: Object,
        require: true,
        Stats: {
            type: Object,
            require: true,
            Pokemon_Stats: {
                HP: {
                    type: Number,
                    require: true,
                },
                Attack: {
                    type: Number,
                    require: true,
                },
                Defense: {
                    type: Number,
                    require: true,
                },
                Sp_Atk: {
                    type: Number,
                    require: true,
                },
                Sp_Def: {
                    type: Number,
                    require: true,
                },
                Speed: {
                    type: Number,
                    require: true,
                },
            }
        },
        Region: {
            type: String,
            require: true,
        },
        Pokedex_Index: {
            type: Number,
            require: true,
        },
    },
});


module.exports = mongoose.model('pokemonCollection', pokemonSchema);