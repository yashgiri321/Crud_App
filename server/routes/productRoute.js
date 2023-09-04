import express from "express";
import { Product } from "../model/productModel.js";
import { createProduct, getProducts, getProduct, updateProduct , deleteProduct} from "../controllers/productController.js";
const router = express.Router();

router.get('/', getProducts);

router.post('/',createProduct);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


export default router;
