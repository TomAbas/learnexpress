import { Request, Response } from "express";
import products from "../model/products";

export const getAllProductsStatic = async (req: Request, res: Response) => {
  const allProducts = await products.find({ name: "vase table" });
  res.status(200).json({ allProducts, length: allProducts.length });
};
export const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await products.find(req.query);
  res.status(200).json({ allProducts, length: allProducts.length });
};
export const getOneProducts = async (req: Request, res: Response) => {
  res.send("123");
};
export const findProducts = async (req: Request, res: Response) => {
  res.send("123");
};
