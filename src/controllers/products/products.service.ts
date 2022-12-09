import { Request, Response } from "express";
import productsModel from "./products.model";
import { queryObj } from "../../interfaces/commom-interfaces";

class ProductService {
  private products = productsModel;

  //   get all post
  public getAllProducts = async (queryObj: queryObj, sort?: string) => {
    let result = this.products.find(queryObj);
    if (sort !== "undefined") {
      result = result.limit(10).sort(sort);
    }
    const allProducts = await result;
    return allProducts;
  };
  // sort
  public sortProductsDelimit = async (queryObj: queryObj, sort: string) => {
    const sortProducts = await this.products
      .find(queryObj)
      .limit(10)
      .sort(sort);
    return sortProducts;
  };
}

export default ProductService;
