import express from "express";
import testRouter from "./Test";
import userRoutes from "../router/user/UserRegistrationRoutes";

const routes = express.Router();
routes.use("/", testRouter);

routes.use("/user", userRoutes);
export default routes;
