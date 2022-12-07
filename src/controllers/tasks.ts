import { Request, Response, NextFunction } from "express";
import Task from "../model/task";
import asyncWrapper from "../middleware/async";
import { createCustomError } from "../error/customError";
export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const task = await Task.findById(id).exec();
    if (!task) {
      return next(createCustomError(`item ${id} not found`, 404));
    }
    res.status(200).json({ task });
  }
);

export const deTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const deleteTask = await Task.findOneAndDelete({ _id: id });
    if (!deleteTask) {
      return next(createCustomError(`item ${id} not found`, 404));
    }
    res.status(200).json({ deleteTask });
  }
);

export const upTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const data = req.body;
    const task = await Task.findOneAndUpdate({ _id: id }, data, {
      runValidators: true,
      returnDocument: "after",
    });
    if (!task) {
      return next(createCustomError(`item ${id} not found`, 404));
    }
    res.status(200).json({ task });
  }
);
