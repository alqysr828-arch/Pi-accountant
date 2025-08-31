import { Request, Response } from "express";

export const health = (req: Request, res: Response) => {
  res.json({ ok: true, service: "backend", time: new Date().toISOString() });
};
