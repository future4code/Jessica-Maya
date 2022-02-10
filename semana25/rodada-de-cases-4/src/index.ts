import { app } from "./controller/app"
import { petRouter, tourRouter } from "./router/Router"

app.use("/create", petRouter)
app.use("/registre", tourRouter)