import express from "express";
import UserRegistrationController from "../../controller/user/UserRegistrationController";
import UserAuthController from "../../controller/auth/UserAuthController";

const userRoutes = express.Router();
const userRegistrationController = new UserRegistrationController();
const userAuthController = new UserAuthController();

userRoutes.post("/register", userRegistrationController.create);
userRoutes.post("/login", userAuthController.Login);

export default userRoutes;
