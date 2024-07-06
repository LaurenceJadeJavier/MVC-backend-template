import { Request, Response } from "express";
import AppResponse from "../../utils/AppResponse";

type TestControllerProps = {
  req: Request;
  res: Response;
};

class TestController {
  async index({ req, res }: TestControllerProps) {
    return AppResponse.sendSuccess({
      res: res,
      data: null,
      message: "test",
      code: 200,
    });
  }
}
export default TestController;
