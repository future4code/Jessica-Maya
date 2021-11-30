import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import {createUsers} from "./endpoints/createUsers"
import {getAllUsers} from "./endpoints/getAllUsers"
import {createProducts} from "./endpoints/createProducts"
import {getAllProducts} from "./endpoints/getAllProducts"
import {createPurchases} from "./endpoints/createPurchases"
import {getPurchasesUsers} from "./endpoints/getPurchasesUsers"

export const app = express()

app.use(express.json())
app.use(cors())

// ENDPOINTS USERS
app.post("/users", createUsers)
app.get("/users", getAllUsers)

// ENDPONTS PRODUCTS
app.post("/products", createProducts)
app.get("/products", getAllProducts)

// ENDPOINTS PURCHASES
app.post("/purchases", createPurchases)
app.get("/users/:user_id/purchases", getPurchasesUsers)



const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 }) 