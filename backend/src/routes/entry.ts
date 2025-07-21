import express from "express";
import { addEntry, getEntries } from "../controllers/entry.controller";
import { verifyToken } from "../middleware/auth.middleware";

const entryRouter  = express.Router();

entryRouter.post("/addEntry", verifyToken, addEntry);
entryRouter.post("/getAllEntries",verifyToken, getEntries);

export default entryRouter;