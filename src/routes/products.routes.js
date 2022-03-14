import {Router} from "express";
import * as productsController from '../controllers/products.controllers'
import {verifyToken} from "../middlewares";

const router = Router()

router.get('/',productsController.getProducts)

router.post('/',verifyToken, productsController.createProduct)

router.get('/:productId', productsController.getProductById)

router.put('/:productId',verifyToken, productsController.updateProductById)

router.delete('/:productId',verifyToken, productsController.deleteProductById)


export default router;
