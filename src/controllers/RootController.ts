import { NextFunction, Request, Response } from "express";
import { Controller, Get, IRouteParams } from "decor-express";
import { Signup } from "../models";

@Controller("/")
export class RootController {
  static children: Array<IRouteParams> = []; /// required
  /// Root Route
  @Get("/")
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ running: "Finenyc-backend-API" });
    } catch (error) {
      next(error);
    }
  }
  /// check Environment Route
  @Get("/check-environment")
  async checkEnvironment(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await Signup.find({});
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
}
