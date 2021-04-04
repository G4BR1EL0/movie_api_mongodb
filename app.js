import userRoutes from "./routes/users.routes.js";
import movieRoutes from "./routes/movies.routes.js";
import loginRoutes from "./routes/login.routes.js";
import singupRoutes from "./routes/singup.routes.js";
import orderRoutes from "./routes/orders.routes.js";
import checkJWT from './middlewares/checkJWT.middlewares.js';
import express  from 'express';
import connect from './db/mongo.js';
import dotenv from 'dotenv';


connect();
dotenv.config();
const app = express();
app.use(express.json());

app.use('/singup', singupRoutes);
app.use('/login', loginRoutes);
app.use('/users',checkJWT, userRoutes);
app.use('/movies', movieRoutes);
app.use('/orders', orderRoutes);

app.listen(process.env.PUERTO, () => {
    console.log(`web server running on port ${process.env.PUERTO}`);
});
