import express from 'express';
import dotenv from "dotenv";
import connectDb from './config/db.js';
// import connectDb from './config/db';
import CategoryRoutes from './routes/CategoryRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import AuthRoutes from './routes/AuthRoutes.js';
import { authMiddleware } from './middleware/AuthMiddleware.js';


dotenv.config();

const app = express();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/auth", AuthRoutes);

app.use(authMiddleware);

app.use('/api', CategoryRoutes);
app.use('/api', UserRoutes);



app.listen(8000, () => {
    console.log("Server is running on port 8000");
});