import express, { Request, Response } from "express";
import {
  dePeople,
  getPeople,
  postPeople,
  putPeople,
} from "../controllers/people";
const router = express.Router();

// router.get("/", getPeople);
// router.post("/", postPeople);
// router.put("/:id", putPeople);
// router.delete("/:id", dePeople);

router.route("/").get(getPeople).post(postPeople);
router.route("/:id").put(putPeople).delete(dePeople);

export default router;
