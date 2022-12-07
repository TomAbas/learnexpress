import {
  findProducts,
  getAllProducts,
  getAllProductsStatic,
  getOneProducts,
} from "./../controllers/products";
import express from "express";

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
router.route("/query").get(findProducts);
router.route("/:id").get(getOneProducts);

export default router;
