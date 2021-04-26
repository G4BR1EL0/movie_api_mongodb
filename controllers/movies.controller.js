import Movies from '../models/movies.model.js';

export const movieController = {
    list: async (req,res) => {
        let respuesta = await Movies.find();
        console.log(respuesta)
        res.send(respuesta);
    },
    searchId: async (req,res) => {
        let respuesta = await Movies.findById(req.params.id);
        console.log(respuesta)
        res.send(respuesta);
    },
    searchTitle: async (req,res) => {
        let respuesta = await Movies.find({"titulo":req.query.title});
        console.log(respuesta)
        res.send(respuesta);
    },
    searchGenre: async (req,res) => {
        let respuesta = await Movies.find({"genero":req.query.genre});
        console.log(respuesta)
        res.send(respuesta);
    },
    searchActors: async (req,res) => {
        let respuesta = await Movies.find({"actores":req.params.actors})
        console.log(respuesta)
        res.send(respuesta);
    },
    insertSeed: async (req,res) => {
        let respuesta2 = await Movies.create(req.body);
        console.log(req.body)
        res.send(respuesta2);
    },
    deleteSeed: async (req,res) => {
        let respuesta = await Movies.remove({});    
        res.send(respuesta);
    }
} 