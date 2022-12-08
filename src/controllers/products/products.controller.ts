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
    console.log("1234");
    this.router.route(`${this.path}`).get(this.getAllProducts);
  }

  private getAllProducts = async (req: Request, res: Response) => {
    console.log("123");
    const { featured, company } = req.query;
    const queryObj: queryObj = {};
    if (featured) {
      queryObj.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObj.company = company;
    }
    console.log(queryObj);
    let allProducts = await this.ProductService.getAllProducts(queryObj);
    res.status(200).json({ allProducts, length: allProducts.length });
  };
}

export default productsController;
