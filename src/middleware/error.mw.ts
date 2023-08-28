import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(res.statusCode || 500).json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : {}
    });
};

const handle404 = (req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    const error = new Error("Task does not exist");
    next(error);
};

export { handleError, handle404 };