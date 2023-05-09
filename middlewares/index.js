const validatePostContact = require("./validatePostContact");
const validateUpdateContact = require("./validateUpdateContact");
const validateUpdateFavorite = require("./validateUpdateFavorite");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
const validateBody = require("./validateBody");

module.exports = {
  validatePostContact,
  validateUpdateContact,
  validateUpdateFavorite,
  isValidId,
  authenticate,
  upload,
  validateBody,
};
