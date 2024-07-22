import express from "express";
import postLogs from "../controllers/logController.js";
import expressAsyncHandler from "express-async-handler";

const logsRouter = express.Router();
logsRouter.post("/", expressAsyncHandler(postLogs));

export default logsRouter;
