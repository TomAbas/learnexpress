import { Request, Response, Router } from "express";
import express from "express";
import Controller from "../../interfaces/controller.interface";
import { queryObj } from "../../interfaces/commom-interfaces";
import ProductService from "./products.service";

class productsController implements Controller {
  public path = "/products";
  public router = express.Router();
  private ProductService = new ProductService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes() {
    this.router.route(`${this.path}`).get(this.getAllProducts);
  }

  private getAllProducts = async (req: Request, res: Response) => {
    const { featured, company, name, sort } = req.query;

    const queryObj: queryObj = {};
    if (featured) {
      queryObj.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObj.company = String(company);
    }
    if (name) {
      queryObj.name = { $regex: name, $options: "i" };
    }
    let allProducts = await this.ProductService.getAllProducts(
      queryObj,
      String(sort)
    );

    res.status(200).json({ allProducts, length: allProducts.length });
  };
}

export default productsController;
