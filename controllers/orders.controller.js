import mongoose from 'mongoose';
import Orders from '../models/orders.model.js';

export const orderController = {
    list: async (req,res) => {
        let respuesta = await Orders.find().populate('movie user');
        res.send(respuesta);
    },
    checkOrder: async (req,res) => {
        let respuesta = await Orders.findOne({
            $and : [
                {user: req.headers.userid},
                {movie: req.headers.movieid}
            ]
        });
        if(!respuesta) {
            res.json({});
            return;
        }
        res.send(respuesta);
    },
    userOrders: async (req,res) => {
        let respuesta = await Orders.find({user:req.headers.userid}).populate('movie user'); 
        res.send(respuesta);
    },
    create: async (req,res) => {
        let respuesta = await Orders.create({
            user:new mongoose.Types.ObjectId(req.body.user),
            movie:new mongoose.Types.ObjectId(req.body.movie),
            price: req.body.price,            
            rent_date:JSON.stringify(Date.now()),
            devolution_date:JSON.stringify(Date.now()+ 15*24*60*60*1000)
        });
        res.send(respuesta);
    }
}
