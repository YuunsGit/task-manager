import { NextFunction, Request, Response } from "express";

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
    const error = new Error("404 Not Found, go to /api/tasks for API routes");
    next(error);
};

export { handleError, handle404 };