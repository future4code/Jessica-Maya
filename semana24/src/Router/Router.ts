import { Router } from "express";
import { BuyerController } from "../Controller/BuyerController";
import { ClientController } from "../Controller/ClientController";
import { PaymentController } from "../Controller/PaymentController";


export const clientRouter = Router()
export const buyerRouter = Router()
export const paymentRouter = Router()

const clientController = new ClientController()
const buyerController = new BuyerController()
const paymentController = new PaymentController()

clientRouter.post("/create", clientController.createClient)
buyerRouter.post("/create", buyerController.createBuyer)
paymentRouter.post("/create", paymentController.createPayment)
