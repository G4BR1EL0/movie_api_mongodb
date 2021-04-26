import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MoviesSchema = new Schema ({
    cast: [String],
    backdrop_path: String,
    director: String,
    genres: [String],
    price: Number,
    overview: String,
    poster_path: String,
    tagline: String,
    title: String,
    video: String
});

const Movies = mongoose.model('movies', MoviesSchema);

export default Movies;