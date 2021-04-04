import mongoose from 'mongoose';
import Pedidos from '../models/orders.model.js';

export const orderController = {
    list: async (req,res) => {
        let respuesta = await Pedidos.find();
        res.send(respuesta);
    },
    create: async (req,res) => {
        let respuesta = await Pedidos.create({
            usuario_id:new mongoose.Types.ObjectId(req.body.usuario_id),
            pelicula_id:new mongoose.Types.ObjectId(req.body.pelicula_id),
            fechaAlquiler:JSON.stringify(Date.now()),
            fechaDevolucion:JSON.stringify(Date.now()+ 30*24*60*60*1000)
        });
        res.send(respuesta);
    }
}
