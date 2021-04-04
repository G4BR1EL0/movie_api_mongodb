import usuarios from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const userController = {
    list: async (req,res) => {
        let respuesta = await usuarios.findById(req.params.id).lean();
        res.send(respuesta);
    },
    login: async (req,res) => {
        let respuesta = await usuarios.find({$and: [{'correo':req.headers.correo},
                                                {'password':req.headers.password}]});
        try {
            const payload={respuesta};
            const secret=process.env.JWT_TOKEN;
            const token=jwt.sign(payload,secret);
    
            res.json({token});
        } catch (error) {
            console.log(error);            
            res.sendStatus(418);
        }
    },
    create: async (req,res) => {
        let respuesta = await usuarios.create(req.body);
        try {
            const payload={respuesta};
            const secret=process.env.JWT_TOKEN;
            const token=jwt.sign(payload,secret);
    
            res.json({token});
        } catch (error) {
            res.sendStatus(418);
        }
        res.send(respuesta);
    },
    delete: async (req,res) => {
        let respuesta = await usuarios.findByIdAndDelete(req.params.id);
        res.send(respuesta);
    }
}
