import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { EntryRequest, IAddEntry } from "../controllers/interfaces/entry.interfaces";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    (req as EntryRequest<IAddEntry>).userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};