import express from "express";
import {join} from "../controllers/userControllers";
import {trending} from "../controllers/videoControllers";

const globalRouter = express.Router();
const handleHome = (req,res) => res.send("Home");
const handleJoin =(req,res) => res.send("Join Home");
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;