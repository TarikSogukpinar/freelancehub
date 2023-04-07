import Joi from "joi";
import JoiPasswordComplexity from "joi-password-complexity";

const registerValidationSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(5).max(50).label("First Name"),
    lastName: Joi.string().required().min(5).max(50).label("Last Name"),
    userName: Joi.string().required().min(5).max(50).label("User Name"),
    bio: Joi.string().min(5).max(100).label("Biography"),
    email: Joi.string().email().required().min(5).max(50).label("Email"),
    password: JoiPasswordComplexity({
      min: 5,
      max: 50,
      lowerCase: 1,
      upperCase: 1,
      requirementCount: 1,
    }).label("Password"),
  });
  return schema.validate(body);
};

export default registerValidationSchema;
