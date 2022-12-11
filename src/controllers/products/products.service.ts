import { Request, Response } from "express";
import productsModel from "./products.model";
import { queryObj } from "../../interfaces/commom-interfaces";

class ProductService {
  private products = productsModel;

  //   get all post
  public getAllProducts = async (queryObj: any) => {
    const allProducts = await this.products.find(queryObj);
    return allProducts;
  };
}

export default ProductService;
