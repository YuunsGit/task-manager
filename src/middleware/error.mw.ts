import { NextFunction, Request, Response } from "express";
import { PrismaError } from "../type.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(res.statusCode || 500).type("json").send(
        JSON.stringify(process.env.NODE_ENV === "development" ? {
            message: err.message,
            stack: err.stack
        } : {
            message: err.message,
        }, null, 2) + "\n");
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
                return res.status(404).type("json").send(JSON.stringify({
                    message: "Task does not exist"
                }, null, 2) + "\n");
            default:
                return res.status(500).type("json").send(JSON.stringify({
                    message: "Database exception"
                }, null, 2) + "\n");
        }
    }
    next(err);
};

export { handleError, handle404, handleDbException };