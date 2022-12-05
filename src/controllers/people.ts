<<<<<<< HEAD

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
=======
import { Request, Response } from "express";
import { people } from "../data";
let peopleData = people;
export const getPeople = (req: Request, res: Response) => {
  res.status(200).json(peopleData);
};

export const postPeople = (req: Request, res: Response) => {
  const { name } = req.body;
  if (name) {
    peopleData.push({ id: peopleData.length + 1, name: name });
    // peopleData.push(string);

    return res.status(201).json({ success: true, person: name });
  }
  res.status(401).json({ success: false, msg: "please give me some money" });
};

export const putPeople = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  let person = people.find((p) => p.id === Number(id));
  if (!person) {
    res.status(401).json({ success: false, msg: `no ${id}` });
  }
  const newPeople = people.map((pe) => {
    if (pe.id === Number(id)) {
      pe.name = name;
    }
    return pe;
  });
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
};

export const dePeople = (req: Request, res: Response) => {
  const { id } = req.params;

  let person = people.find((p) => p.id === Number(id));
  if (!person) {
    res.status(401).json({ success: false, msg: `no ${id}` });
  }
  const newPeople = people.filter((pe) => {
    return pe.id !== Number(id);
  });
  res.status(200).json({ success: true, data: newPeople });
};
>>>>>>> f292320d3f97dec5fa5a0fd5fc01acd4a174a5d8
