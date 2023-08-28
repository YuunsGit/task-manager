import { Task } from "../type.js";
import prisma from "../db/prisma.js";
import { NextFunction, Request, Response } from "express";

const createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, dueDate }: Task = req.body;
        const task = await prisma.task.create({
            data: {
                title,
                description,
                dueDate: new Date(dueDate)
            }
        });

        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
};

const getTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const task = await prisma.task.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!task) {
            const err = new Error("Task does not exist");
            res.status(404);
            return next(err);
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = await prisma.task.findMany({});

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate }: Task = req.body;

        const task = await prisma.task.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title,
                description,
                dueDate: new Date(dueDate)
            }
        });

        if (!task) {
            const err = new Error("Task does not exist");
            res.status(404);
            return next(err);
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const task = await prisma.task.delete({
            where: {
                id: parseInt(id)
            },
        });

        if (!task) {
            const err = new Error("Task does not exist");
            res.status(404);
            return next(err);
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

export { createTask, getTask, getTasks, updateTask, deleteTask };