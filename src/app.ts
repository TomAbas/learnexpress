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
app.get("/api/products/:productId", (req: Request, res: Response) => {
  const { productId } = req.params;
  const newProducts = products.find((item) => {
    return item.id == productId;
  });
  if (!newProducts) {
    return res.status(404).send("<h1>not found</h1>");
  }
  res.json(newProducts);
});
app.get(
  "/api/products/:productId/reviews/:reviewId",
  (req: Request, res: Response) => {
    console.log(req.params);
    res.send("<h1>hello</h1>");
  }
);
app.listen(6868, () => {
  console.log("voo");
});
