import { Router } from "express";
import { ProductController } from "../Controller/ProductController";
import { ProductTagIdController } from "../Controller/ProductTagIdController";
import { TagsController } from "../Controller/TagsController";

export const productRouter = Router()
export const tagsRouter = Router()
export const productTagsIdRouter = Router()

const productController = new ProductController()
const tagsController = new TagsController()
const productTagsIdController = new ProductTagIdController()

// endpoints de pegar as informações
productRouter.get("/:name", productController.getProductByNameController)
tagsRouter.get("/:name", tagsController.getTagByNameController)
productTagsIdRouter.get("/tag", productTagsIdController.getProduct_TagsByIdTagController)
productTagsIdRouter.get("/:id_product", productTagsIdController.getProduct_TagsByIdProductController)


// endpoints de criar as informações
productRouter.post("/create", productController.createProduct)
tagsRouter.post("/create", tagsController.createTag)
productTagsIdRouter.post("/insert", productTagsIdController.createProductTagId)
