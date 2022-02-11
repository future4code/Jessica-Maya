import { Router } from "express"
import { PetController } from "../controller/PetController"
import { PetTourController } from "../controller/PetTourController"

export const petRouter = Router()
export const tourRouter = Router()

const petController = new PetController()
const tourController = new PetTourController()

tourRouter.get("/tour", tourController.getAllDateTourController)
petRouter.post("/pet", petController.createPetController)
tourRouter.post("/tour", tourController.createPetTourController)
