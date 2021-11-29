import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getUsersName } from "./endpoints/getAllUsers"
import {getUsersType} from "./endpoints/getAllUsers"
import {getUsersOrder} from "./endpoints/getAllUsers"
import {getUsersPage} from "./endpoints/getAllUsers"
import {getUsersAll} from "./endpoints/getAllUsers"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getUsersName)
app.get("/users/type", getUsersType)
app.get("/users/order", getUsersOrder)
app.get("/users/page", getUsersPage)
app.get("/users/all", getUsersAll)

const server = app.listen(process.env.PORT || 3306, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})