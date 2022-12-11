import App from "./app";
import productsController from "./controllers/products/products.controller";
import JwtController from "./controllers/jwts/jwt.controller";
const app = new App([new productsController(), new JwtController()], 6969);

app.listen();
