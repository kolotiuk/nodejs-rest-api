const { HttpError } = require("../helpers");

const validatePostContact = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const name = error.details.map((el) => el.context.label);
      next(HttpError(400, `missing required ${name[0]} field`));
    }
    next();
  };

  return func;
};

module.exports = validatePostContact;
