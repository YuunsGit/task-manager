import request from "supertest";
import app from "../src/app.js";

let createdTaskId: number;

describe("POST /api/tasks", () => {
    it("should create a task", async () => {
        const res = await request(app).post("/api/tasks").send({
            title: "Test task title",
            description: "Test task description",
            dueDate: "2023/01/01"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("Test task title");
        createdTaskId = res.body.id;
    });

    it("should throw an error with invalid date input", async () => {
        const res = await request(app).post("/api/tasks").send({
            title: "Test task title",
            description: "Test task description",
            dueDate: "test"
        });
        expect(res.statusCode).toBe(400);
    });

    it("should throw an error with long title input", async () => {
        const res = await request(app).post("/api/tasks").send({
            title: "Test11111111111111111111111111111111111111111111",
            description: "Test task description",
            dueDate: "2023/01/01"
        });
        expect(res.statusCode).toBe(400);
    });
});

describe("GET /api/tasks", () => {
    it("should return all tasks", async () => {
        const res = await request(app).get("/api/tasks");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

describe("GET /api/tasks/:id", () => {
    it("should return a task", async () => {
        const res = await request(app).get(`/api/tasks/${createdTaskId}`);
        expect(res.statusCode).toBe(200);
    });

    it("should throw an error when no task found", async () => {
        const res = await request(app).get("/api/tasks/100000");
        expect(res.statusCode).toBe(404);
    });
});

describe("UPDATE /api/tasks/:id", () => {
    it("should update a task", async () => {
        const res = await request(app).put(
            `/api/tasks/${createdTaskId}`
        ).send({
            title: "Updated title",
            description: "Test task description",
            dueDate: "2023/01/01"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe("Updated title");
    });

    it("should throw an error with invalid date input", async () => {
        const res = await request(app).put(`/api/tasks/${createdTaskId}`).send({
            title: "Test task title",
            description: "Test task description",
            dueDate: "test"
        });
        expect(res.statusCode).toBe(400);
    });

    it("should throw an error with long title input", async () => {
        const res = await request(app).put(`/api/tasks/${createdTaskId}`).send({
            title: "Test11111111111111111111111111111111111111111111",
            description: "Test task description",
            dueDate: "2023/01/01"
        });
        expect(res.statusCode).toBe(400);
    });

    it("should throw an error when no task found", async () => {
        const res = await request(app).put("/api/tasks/100000").send({
            title: "Test task title",
            description: "Test task description",
            dueDate: "2023/01/01"
        });
        expect(res.statusCode).toBe(404);
    });
});

describe("DELETE /api/tasks/:id", () => {
    it("should delete the task", async () => {
        const res = await request(app).delete(`/api/tasks/${createdTaskId}`);
        expect(res.statusCode).toBe(204);
    });

    it("should throw an error when no task found", async () => {
        const res = await request(app).delete("/api/tasks/100000");
        expect(res.statusCode).toBe(404);
    });
});