import {  Request, Response } from "express";
import { Entry } from "../models/Entry";

interface IAddEntry {
  title: string;
  amount: number;
  type: string;
  category: string;
  note?: string;
  date: string;
}

interface EntryRequest<T = any> extends Request {
  body: T;
  userId?: string;
}


export const addEntry = async (req: EntryRequest<IAddEntry>, res: Response) => {
  try {
    const { title, amount, type, category, note, date } = req.body;
    const userId = req.userId; // Injected from auth middleware

    const newEntry = new Entry({
      userId,
      title,
      amount,
      type,
      category,
      note,
      date,
    });

    await newEntry.save();
    res.status(201).json({ message: "Entry added", entry: newEntry });
  } catch (error) {
    console.error("Add entry error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getEntries = async (req: EntryRequest, res: Response) => {
  try {
    const userId = req.userId;
    const entries = await Entry.find({ userId }).sort({ date: -1 });
    res.status(200).json(entries);
  } catch (error) {
    console.error("Get entries error:", error);
    res.status(500).json({ message: "Could not fetch entries" });
  }
};