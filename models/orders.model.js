import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PedidosSchema = new Schema ({
    usuario_id: {type: Schema.Types.ObjectId, ref: "Usuarios"},
    pelicula_id: {type: Schema.Types.ObjectId, ref: "Peliculas"},
    fechaAlquiler: Date,
    fechaDevolucion: Date
});

const Pedidos = mongoose.model('Pedidos',PedidosSchema);

export default Pedidos;