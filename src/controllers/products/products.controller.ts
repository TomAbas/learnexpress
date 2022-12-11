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
    const { featured, company, name, sort, select, numbericFilters } =
      req.query;
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const queryObj: any = {};
    if (featured) {
      queryObj.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObj.company = String(company);
    }
    if (name) {
      queryObj.name = { $regex: name, $options: "i" };
    }
    if (numbericFilters) {
      const operatorMap: any = {
        "=": "$eq",
        ">": "$gt",
        "<": "$lt",
        ">=": "$gte",
        "<=": "$lte",
      };
      let regex = /[<>]=?|=/g;
      //sample solution
      let filters = String(numbericFilters).replace(
        regex,
        (match) => `-${operatorMap[match]}-`
      );
      const options = ["price", "rating"];
      let value = filters.split(",").forEach((item) => {
        const [option, operator, value] = item.split("-");
        if (options.includes(option)) {
          queryObj[option] = { [operator]: Number(value) };
        }
      });
      //my cc solution
      //   let value: string[] = String(numbericFilters).split(",");
      //   value.forEach((element, i) => {
      //     let compare = String(value[i].match(regex));
      //     let valueSlit: string[] = element.split(compare);
      //     queryObj[valueSlit[0]] = { [operatorMap[compare]]: valueSlit[1] };
      //   });
      console.log(queryObj);
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
