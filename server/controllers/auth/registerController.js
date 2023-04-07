import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import registerValidationSchema from "../../validations/authValidation/registerValidationSchema.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { error } = registerValidationSchema(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        error: true,
        message: "You cannot register, Email already exist",
      });
    }

    const checkUserNameExist = await User.findOne({
      userName: req.body.userName,
    });
    if (checkUserNameExist) {
      return res.status(400).json({
        error: true,
        message: "You cannot register, User Name already exist",
      });
    }

    const saltPassword = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(req.body.password, saltPassword);

    const data = await new User({ ...req.body, password: hashPassword }).save();

    res.status(201).json({
      data: data,
      message: "Account Created Succesfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

export default { registerUser };
