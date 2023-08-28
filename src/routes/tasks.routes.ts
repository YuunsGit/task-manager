import express from "express";
import validateInputs from "../middleware/validation.mw.js";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/tasks.controllers.js";

const router = express.Router();

/* Create task */
router.post("/", validateInputs, createTask);

/* Retrieve task */
router.get("/:id", getTask);

/* Retrieve all task */
router.get("/", getTasks);

/* Update task */
router.put("/:id", validateInputs, updateTask);

/* Delete task */
router.delete("/:id", deleteTask);

export default router;