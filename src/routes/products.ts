import { findProducts, getAllProducts, getOneProducts } from "./../controllers/products";
import express from "express";

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/query").get(findProducts);
router.route("/:id").get(getOneProducts);

