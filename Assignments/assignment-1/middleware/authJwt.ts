import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
const SECRET: string = "SECr3t"; // This should be in an environment variable in a real application

const authenticateJwt = (req: Request, res: Response, next: any) => {
  const authHeader: string | undefined = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      let user = jwt.verify(token, SECRET) as JwtPayload;
      req.headers.userId = user.id;
      next();
    } catch (err) {
      return res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
};

export { SECRET, authenticateJwt };
