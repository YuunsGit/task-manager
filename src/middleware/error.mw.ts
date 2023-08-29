import { NextFunction, Request, Response } from "express";
import { PrismaError } from "../type.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(res.statusCode || 500).json(
        process.env.NODE_ENV === "development" ? {
            message: err.message,
            stack: err.stack
        } : {
            message: err.message,
        }
    );
};

const handle404 = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    const error = new Error("404 Not Found, go to /api/tasks");
    next(error);
};

const handleDbException = (err: PrismaError, req: Request, res: Response, next: NextFunction) => {
    if (err.code) {
        switch (err.code) {
            case "P2025":
                return res.status(404).json({
                    message: "Task does not exist"
                });
            default:
                return res.status(500).json({
                    message: "Database exception"
                });
        }
    }
    next(err);
};

export { handleError, handle404, handleDbException };