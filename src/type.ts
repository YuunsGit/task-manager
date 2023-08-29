export type Task = {
    title: string;
    description: string;
    dueDate: Date;
}

export interface PrismaError extends Error {
    code: string
}