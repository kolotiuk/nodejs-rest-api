const { HttpError } = require("../helpers");

const validatePostContact = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const name = error.details[0].context.label;
      next(HttpError(400, `missing required ${name} field`));
    }
    next();
  };

  return func;
};

module.exports = validatePostContact;
