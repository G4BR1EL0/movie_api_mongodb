import Users from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const userController = {
    list: async (req,res) => {
        let respuesta = await Users.findById(req.params.id).lean();
        res.send(respuesta);
    },
    login: async (req,res) => {
        try {
            let respuesta = await Users.find({$and: [{'email':req.body.correo},
                                                    {'password':req.body.password}]});
            const payload={respuesta};
            const secret=process.env.JWT_TOKEN;
            const token=jwt.sign(payload,secret);
    
            res.json({token});
        } catch (error) {
            console.log(error);            
            res.send(error);
        }
    },
    create: async (req,res) => {
        try {
            let respuesta = await Users.create(req.body);
            const payload={respuesta};
            const secret=process.env.JWT_TOKEN;
            const token=jwt.sign(payload,secret);
    
            res.json({token});
        } catch (error) {
            res.send(error);
        }
    },
    delete: async (req,res) => {
        let respuesta = await Users.findByIdAndDelete(req.params.id);
        res.send(respuesta);
    }
}
