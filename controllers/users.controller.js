import Users from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const userController = {
    list: async (req,res) => {
        const user = jwt.decode(req.headers.token);
        let respuesta = await Users.findById(user.respuesta._id).lean();
        res.json({respuesta});
    },
    login: async (req,res) => {
        try {
            console.log(req.body)
            let respuesta = await Users.findOne({$and: [{'email':req.body.email},
                                                    {'password':req.body.password}]}).lean();
            if(respuesta){
                const payload={respuesta};
                const secret=process.env.JWT_TOKEN;
                const token=jwt.sign(payload,secret);        
                res.json({token});
                return 
            }
            res.json({error:"Datos incorrectos"});
        } catch (error) {
            console.log(error);            
            res.send(error);
        }
    },
    create: async (req,res) => {
        try {
            console.log(req.body)
            let respuesta = await Users.create(req.body);
    
            res.json({respuesta});
        } catch (error) {
            res.json({error});
            console.log(error);
        }
    },
    delete: async (req,res) => {
        let respuesta = await Users.findByIdAndDelete(req.params.id);
        res.send(respuesta);
    }
}
