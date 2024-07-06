import express from "express";
import apiKeyAuth from "../../middleware/apiKey";
import TestController from "../../controller/default/testControllers";

const testRouter = express.Router();
const testController = new TestController();

testRouter.get("/", testController.index);
export default testRouter;
