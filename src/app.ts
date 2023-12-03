import express from "express";
import bodyParser from "body-parser";
import tasksRoutes from "./routes/tasks.routes.js";
import { handle404, handleDbException, handleError } from "./middleware/error.mw.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/tasks", tasksRoutes);

app.use(handle404);
app.use(handleDbException);
app.use(handleError);

export default app;