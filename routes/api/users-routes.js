const express = require("express");

const usersController = require("../../controllers/users-controllers");

const {
  validatePostContact,
  authenticate,
  upload,
  validateBody,
} = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validatePostContact(schemas.userRegisterSchema),
  usersController.register
);

router.get("/verify/:verificationToken", usersController.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  usersController.resendVerifyEmail
);

router.post(
  "/login",
  validatePostContact(schemas.userLoginSchema),
  usersController.login
);

router.post("/logout", authenticate, usersController.logout);

router.get("/current", authenticate, usersController.getCurrent);

router.patch("/subscription", authenticate, usersController.updateSubscription);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersController.updateAvatar
);

module.exports = router;
