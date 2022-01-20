import { app } from "./Controller/app";
import { userRouter } from "./Router/Router";


app.use("/user", userRouter)
