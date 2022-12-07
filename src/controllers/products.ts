import { Request, Response } from "express";
import products from "../model/products";
import { queryObj } from "../interfaces/commom-interfaces";
import { Product } from "../productsClass";
export const getAllProductsStatic = async (req: Request, res: Response) => {
  const allProducts = await products.find({ name: "vase table" });
  res.status(200).json({ allProducts, length: allProducts.length });
};
export const getAllProducts = async (req: Request, res: Response) => {
  const { featured, company } = req.query;
  const queryObj: queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  console.log(queryObj);
  const allProducts = await products.find(queryObj);
  res.status(200).json({ allProducts, length: allProducts.length });
};
export const getOneProducts = async (req: Request, res: Response) => {
  res.send("123");
};
export const findProducts = async (req: Request, res: Response) => {
  res.send("123");
};
