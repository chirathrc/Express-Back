import express from 'express';
import { createCategory, getCategories } from '../controller/CategoryController.js';
import { createProduct, getProducts, updateProduct } from '../controller/Productcontroller.js';
import { login } from '../controller/AuthController.js';

const router = express.Router();

router.post("/login",login);

export default router;
