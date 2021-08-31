import express from "express";
import {
  getProductById,
  getProducts,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
} from "../controllers/productController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, DeleteProduct)
  .put(protect, UpdateProduct);
router.route("/create").post(protect, CreateProduct);

export default router;
