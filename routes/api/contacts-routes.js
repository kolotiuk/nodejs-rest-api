const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const {
  validatePostContact,
  validateUpdateContact,
} = require("../../middlewares");

const { addSchema } = require("../../schemas");
const { updateSchema } = require("../../schemas");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validatePostContact(addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validateUpdateContact(updateSchema),
  ctrl.updateContact
);

module.exports = router;
