import express, { Request, Response } from "express";
import { customAPIError } from "../../error/customError";
import Controller from "../../interfaces/controller.interface";
import JwtService from "./jwt.service";
import Authentication from "../../middleware/middleware.authentication";
class JwtController implements Controller {
  public path = "/login";
  public path1 = "/dashboard";
  public router = express.Router();
  private jwtService = new JwtService();
  private auMid = new Authentication();
  constructor() {
    this.initialRoutes();
  }

  private initialRoutes() {
    this.router.route(`${this.path}`).post(this.thor);
    this.router
      .route(`${this.path1}`)
      .get(this.auMid.authenticationMiddleware, this.dashboard);
  }

  private thor = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    let token = this.jwtService.isProvide(username, password);
    res.status(200).json({ msg: "user create", token });
  };

  private dashboard = async (req: Request, res: Response) => {
    const { id, username } = req.user;
    const number = Math.random() * 1000;
    res.status(200).json({ msg: `,hello${username} `, secret: `${number}` });
  };
}

export default JwtController;
