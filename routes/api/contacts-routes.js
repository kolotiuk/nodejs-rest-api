const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const {
  validatePostContact,
  validateUpdateContact,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts-schemas");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validatePostContact(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validateUpdateContact(schemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
