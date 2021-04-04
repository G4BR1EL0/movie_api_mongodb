import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    nombre: String,
    direccion: String,
    administrador: Boolean,
    correo: String,
    password: String
});

const usuarios = mongoose.model('Users',UsuarioSchema);

export default usuarios;