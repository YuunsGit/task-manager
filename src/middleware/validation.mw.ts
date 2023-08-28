import { NextFunction, Request, Response } from "express";
import schema from "../db/schema.js";
import { Task } from "../type.js";

const validateInputs = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, dueDate }: Task = req.body;
    const { error } = schema.validate({ title, description, dueDate });
    if (!error) {
        return next();
    }
    res.status(400).json({
        message: error.details[0].message,
    });
};

export default validateInputs;