const { HttpError } = require("../helpers");

const validateUpdateFavorite = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const name = error.details.map((el) => el.context.label);
      next(HttpError(400, `missing field ${name[0]}`));
    }
    next();
  };

  return func;
};

module.exports = validateUpdateFavorite;
