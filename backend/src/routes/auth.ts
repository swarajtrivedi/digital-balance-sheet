import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller";

const authRouter  = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

// Test endpoint
authRouter.post("/test", async(req, res)=>{
    console.log("test working");
    res.status(201);
})

export default authRouter;
