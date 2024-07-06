import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = (payload: string | object | Buffer) => {
  const token = jwt.sign(payload, `${config.token.secret}`, {
    expiresIn: `${config.token.expiresIn}`,
  });

  return token;
};

export const validateToken = (token: string) => {
  const validatedToken = jwt.verify(token, `${config.token.secret}`);

  return validatedToken;
};
