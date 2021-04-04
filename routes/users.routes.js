import { Router } from 'express';
import { userController } from '../controllers/users.controller.js';

const userRoutes = Router();

userRoutes.get("/:id", userController.list);
userRoutes.delete("/:id", userController.delete);

export default userRoutes;