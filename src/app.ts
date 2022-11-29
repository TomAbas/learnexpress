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

app.get("/api/v1/query", (req: Request, res: Response) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (typeof search === "string") {
    sortedProducts = sortedProducts.filter((a) => {
      return a.name.startsWith(search);
    });
  }
  if (typeof limit === "string") {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  // if (sortedProducts.length === 0) {
  //    res.status(200).json({ success: true, data: [] });
  // }
  res.status(200).json(sortedProducts);
  return;
});
app.listen(6868, () => {
  console.log("voo");
});
