import express, { Request, Response } from "express";
import {
  getAllTasks,
  upTask,
  getTask,
  createTask,
  deTask,
} from "../controllers/tasks";
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(upTask).delete(deTask);

export default router;
