import Peliculas from '../models/movies.model.js';

export const movieController = {
    list: async (req,res) => {
        let respuesta = await Peliculas.find().lean();
        console.log(respuesta)
        res.send(respuesta);
    },
    searchId: async (req,res) => {
        let respuesta = await Peliculas.findById(req.params.id).lean();
        console.log(respuesta)
        res.send(respuesta);
    },
    searchTitle: async (req,res) => {
        let respuesta = await Peliculas.find({"titulo":req.query.title}).lean();
        console.log(respuesta)
        res.send(respuesta);
    },
    searchGenre: async (req,res) => {
        let respuesta = await Peliculas.find({"genero":req.query.genre}).lean();
        console.log(respuesta)
        res.send(respuesta);
    },
    searchActors: async (req,res) => {
        let respuesta = await Peliculas.find({"actores":req.params.actors}).lean();
        console.log(respuesta)
        res.send(respuesta);
    }
} 