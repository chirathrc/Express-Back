import express from 'express';
import { createUser } from '../controller/UserController.js';


const router = express.Router();

router.post("/createUser", createUser);

export default router;