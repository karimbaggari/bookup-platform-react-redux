import Joi from "joi";

const validationSchema = Joi.object({
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(8).required().label("Password"),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("Confirm Password")
    .messages({ "any.only": "Passwords do not match" }),
});

const validateRegisterForm = (formData) => {
  const { error } = validationSchema.validate(formData, { abortEarly: false });

  if (!error) {
    return {};
  }

  const formErrors = {};
  error.details.forEach((detail) => {
    formErrors[detail.path[0]] = detail.message;
  });
  console.log(formErrors);
  return formErrors;
};

export { validateRegisterForm };
