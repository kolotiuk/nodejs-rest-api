const Joi = require("joi");

const contacts = require("../models/contacts");
const { ctrlWrapper } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    const name = error.details.map((el) => el.context.label);
    // throw HttpError(400, `missing required ${name[0]} field`);
    // throw HttpError(400, error.message);
    return res
      .status(400)
      .json({ message: `missing required ${name[0]} field` });
  }
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId, req.body);
  if (!result) {
    // throw HttpError(404, "Not found");
    return res.status(404).json({ message: "Not found" });
  }
  res.json({
    message: "contact deleted",
  });
};

const updateContact = async (req, res) => {
  if (!Object.keys(req.body).length) {
    // throw HttpError(400, error.message);
    return res.status(400).json({ message: "missing fields" });
  }
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    // throw HttpError(404, "Not found");
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
};
