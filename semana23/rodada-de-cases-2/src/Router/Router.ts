import { Router } from "express";
import { ProductController } from "../Controller/ProductController";

export const userRouter = Router();

const productController = new ProductController()

userRouter.post("/create", productController.createProduct)

