import { app } from "./app";
import { productRouter, productTagsIdRouter, tagsRouter } from "./Router/Router";

app.use("/product", productRouter)
app.use("/tag", tagsRouter)
app.use("/product/tag", productTagsIdRouter)
