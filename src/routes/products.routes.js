import {Router} from "express";
import * as productsController from '../controllers/products.controllers'
import {authjwt} from "../middlewares";

const router = Router()

router.get('/',productsController.getProducts)

router.post('/',[authjwt.verifyToken, authjwt.isModerator], productsController.createProduct)

router.get('/:productId', productsController.getProductById)

router.put('/:productId',[authjwt.verifyToken, authjwt.isAdmin], productsController.updateProductById)

router.delete('/:productId',[authjwt.verifyToken, authjwt.isAdmin], productsController.deleteProductById)


export default router;
