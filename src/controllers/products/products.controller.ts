import { Request, Response } from "express";
import express from "express";
import Controller from "../../interfaces/controller.interface";
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
    const { featured, company, name } = req.query;
    const queryObj: any = {};
    console.log(typeof featured);
    if (typeof featured === "string") {
      queryObj.featured = featured === "true" ? true : false;
    }
    if (typeof company === "string") {
      queryObj.company = company;
    }
    if (typeof name === "string") {
      queryObj.name = { $regex: name, $options: "i" };
    }
    console.log(queryObj);
    let allProducts = await this.ProductService.getAllProducts(queryObj);
    res.status(200).json({ allProducts, length: allProducts.length });
  };
}

export default productsController;
