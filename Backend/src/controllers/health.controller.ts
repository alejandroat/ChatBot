import { Request, Response } from "express";

export function healthController(
    req: Request,
    res: Response
) {
    res.json({
        success: true,
        message: "API running successfully",
    })
}