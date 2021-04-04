import { Router } from 'express';
import { userController } from '../controllers/users.controller.js';

const loginRoutes = Router();

loginRoutes.get("/", userController.login);

export default loginRoutes;