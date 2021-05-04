import Movies from '../models/movies.model.js';

export const movieController = {
    list: async (req,res) => {
        let respuesta = await Movies.find().limit(10);
        res.send(respuesta);
    },
    searchId: async (req,res) => {
        let respuesta = await Movies.findOne({_id:req.headers.id});
        res.send(respuesta);
    },
    searchTitle: async (req,res) => {
        let respuesta = await Movies.find({title:{ $regex: '.*' + req.headers.title + '.*' }}).limit(20);
        res.send(respuesta);
    },
    searchGenre: async (req,res) => {
        let respuesta = await Movies.find({genres:req.headers.genre}).limit(20);
        res.send(respuesta);
    },
    searchActors: async (req,res) => {
        let respuesta = await Movies.find({cast: { $regex: '.*' + req.headers.actors + '.*' }}).limit(20);
        res.send(respuesta);
    },
    searchDirector: async (req,res) => {
        let respuesta = await Movies.find({director: { $regex: '.*' + req.headers.director + '.*' }}).limit(20);
        res.send(respuesta);
    },
    insertSeed: async (req,res) => {
        let respuesta2 = await Movies.create(req.body);
        res.send(respuesta2);
    },
    deleteSeed: async (req,res) => {
        let respuesta = await Movies.remove({});    
        res.send(respuesta);
    }
} 