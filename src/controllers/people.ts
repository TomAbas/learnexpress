
import { Request, Response } from "express";
import people from "../model/people";

export const createPeople = async (req: Request, res: Response) => {
  try {
    const task = await people.create(req.body);
    res.status(201).json({ task });
  } catch (errosr: any) {
    const error = errosr.errors.name.message;
    res.status(404).json({ error });
  }
};

export const getTask = (req: Request, res: Response) => {
  res.json({ id: req.params.id });
};

export const upTask = (req: Request, res: Response) => {
  res.send("up task");
};

export const deTask = (req: Request, res: Response) => {
  res.send("de task");
};