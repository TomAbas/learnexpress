import express, { Request, Response } from "express";
import Controller from "../../interfaces/controller.interface";
import JwtService from "./jwt.service";

class JwtController implements Controller {
  public path = "/login";
  public path1 = "/dashboard";
  public router = express.Router();
  private jwtService = new JwtService();

  constructor() {
    this.initialRoutes();
  }

  private initialRoutes() {
    this.router.route(`${this.path}`).post(this.thor);
    this.router.route(`${this.path1}`).get(this.dashboard);
  }

  private thor = async (req: Request, res: Response) => {
    res.send("phake auhtor");
  };

  private dashboard = async (req: Request, res: Response) => {
    const number = Math.random() * 1000;
    res.status(200).json({ msg: `hello`, secret: `your num ${number}` });
  };
}

export default JwtController;
