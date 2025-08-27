import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller";

const authRouter  = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);

// Test endpoint
authRouter.post("/test", async(req, res)=>{
    console.log("Checking automation with Elastic IP -1.");
    res.status(201);
})

export default authRouter;
