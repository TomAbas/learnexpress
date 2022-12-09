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
    const { featured, company, name, sort, select, price } = req.query;
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
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
    if (price) {
      let regex = /[<>]=?|=/g;
      let compare: any = String(price).match(regex);
      let value = String(price).split(compare[0])[1];

      //   if (compare === ">") {
      //     queryObj.price = { $gte: value };
      //   } else {
      //     queryObj.price = { $lte: value };
      //   }
    }
    let allProducts = await this.ProductService.getAllProducts(
      queryObj,
      limit,
      page,
      String(sort),
      String(select)
    );

    res.status(200).json({ allProducts, length: allProducts.length });
  };
}

export default productsController;
