import { app } from "./app";
import { userRouter } from "./Router/Router";



app.use("/product", userRouter)