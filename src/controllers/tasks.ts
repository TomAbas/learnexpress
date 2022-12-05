import { Request, Response, NextFunction } from "express";
import Task from "../model/task";
import asyncWrapper from "../middleware/async";

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
    console.log(task);
    if (!task) {
      const error: any = new Error("not found");
      error.status = 404;
      return next(error);
      return res.status(404).json({ msg: `no task ${id}` });
    }
    res.status(200).json({ task });
  }
);

export const deTask = asyncWrapper(async (req: Request, res: Response) => {
  const id = req.params.id;
  const deleteTask = await Task.findOneAndDelete({ _id: id });
  if (!deleteTask) {
    return res.status(404).json({ msg: `no task ${id}` });
  }
  res.status(200).json({ deleteTask });
});

export const upTask = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const task = await Task.findOneAndUpdate({ _id: id }, data, {
    runValidators: true,
    returnDocument: "after",
  });
  if (!task) {
    return res.status(404).json({ msg: `no task ${id}` });
  }
  res.status(200).json({ task });
});
