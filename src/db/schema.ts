import Joi from "joi";

const schema = Joi.object({
    title: Joi.string()
        .max(30)
        .required(),
    description: Joi.string()
        .max(150)
        .required(),
    dueDate: Joi
        .date()
        .required()
});

export default schema;