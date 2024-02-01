import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils.js";
import { addOrder } from "../controllers/ordersController.js";


const ordersRouter = express.Router();
ordersRouter.post("/", isAuth ,expressAsyncHandler(addOrder));

export default ordersRouter;
