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
