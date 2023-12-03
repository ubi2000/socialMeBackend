import { body, validationResult } from "express-validator";
import * as regexValidate from "../constants/constants.js"


export const validateRegistration = [
  body("email")
    .isEmail()
    .withMessage("email must be at least 5 characters long"),
  body("password")
    .isLength({ min: 8 })
    .matches(regexValidate.regexValidation.passwordValidate)
    .withMessage(
      "Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character "
    ),
    validate
    
];

export const validate = (req,res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ errors: errors.array() });
};
