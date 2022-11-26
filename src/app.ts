import express, { Request, Response } from "express";
import { people, products } from "./data";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send('<h1>Home Page</h1><br/><a href="/api/products">link</a>');
});
app.get("/api/products", (req: Request, res: Response) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });

  res.json(newProducts);
});
app.get("/api/products/1", (req: Request, res: Response) => {
  const newProducts = products.find((item) => {
    return item.id === 1;
  });

  res.json(newProducts);
});
app.listen(6868, () => {
  console.log("voo");
});
