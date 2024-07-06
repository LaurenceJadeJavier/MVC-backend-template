import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "../router";
import AppError from "../utils/AppError";
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.PROJECT_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", routes);

app.get("/", (req, res) => {
  return res.redirect("/docs");
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(` Cant Find ${req.originalUrl} on this server`, 400));
});

export default app;
