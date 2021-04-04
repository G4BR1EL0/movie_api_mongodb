import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PeliculasSchema = new Schema ({
    titulo: String,
    genero: String,
    actores: String
});

const Peliculas = mongoose.model('Peliculas',PeliculasSchema);

export default Peliculas;