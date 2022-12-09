import { Request, Response } from "express";
import productsModel from "./products.model";
import { queryObj } from "../../interfaces/commom-interfaces";

class ProductService {
  private products = productsModel;

  //   get all post
  public getAllProducts = async (
    queryObj: queryObj,
    limit: number,
    page: number,
    sort?: string,
    select?: string
  ) => {
    let result = this.products.find(queryObj);
    //sort
    if (sort !== "undefined") {
      let arg = sort?.split(",").join(" ");
      result = result.sort(arg);
    } else {
      result = result.sort("createAt");
    }
    //seclect
    if (select !== "undefined") {
      let arg = select?.split(",").join(" ");
      result = result.select(arg);
    }
    //limit + skip
    let skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);

    const allProducts = await result;

    return allProducts;
  };
}

export default ProductService;
