import express from 'express';
import { createCategory, getCategories } from '../controller/CategoryController.js';
import { createProduct, getProducts, updateProduct } from '../controller/Productcontroller.js';

const router = express.Router();

router.post("/category", createCategory);  // Create category
router.get("/category", getCategories);  // Get all categories


router.post("/createProduct", createProduct);  //Create Product
router.get("/getProducts", getProducts);  // get Products
router.put("/updateProduct/:id", updateProduct);

export default router;
