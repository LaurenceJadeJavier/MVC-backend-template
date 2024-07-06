import { Response } from "express";

type ResponseParamsType = {
  res: Response;
  data: unknown;
  message?: string;
  code: number;
  totalResults?: string;
};

class AppResponse {
  static sendSuccess({
    res,
    code,
    data,
    message,
    totalResults,
  }: ResponseParamsType): void {
    res.status(code).json({
      status: "success",
      ...(totalResults && { totalResults }),
      data,
      message,
      code,
    });
  }

  static sendErrors({ code, data, res, message }: ResponseParamsType): void {
    res.status(code).json({
      status: "error",
      data,
      message,
    });
  }
}

export default AppResponse;
