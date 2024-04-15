import express from "express";
const router = express.Router();
import asyncWrapper from "../utils/asyncWrapper.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.js";

router.get("/:id", asyncWrapper(getProduct));
router.post("/new", asyncWrapper(createProduct));
router.patch("/update/:id", asyncWrapper(updateProduct));
router.patch("/delete/:id", asyncWrapper(deleteProduct));

export default router;
