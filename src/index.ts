import App from "./app";
import productsController from "./controllers/products/products.controller";

const app = new App([new productsController()], 6969);

app.listen();
