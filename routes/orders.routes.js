import { Router } from 'express';
import { orderController } from '../controllers/orders.controller.js';

const orderRoutes = Router();

orderRoutes.get("/", orderController.list);
orderRoutes.post("/", orderController.create);

export default orderRoutes;