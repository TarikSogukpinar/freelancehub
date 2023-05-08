import User from "../../models/User.js";
import passwordResetValidationSchema from "../../validations/userValidation/passwordResetValidationSchema.js";
import jwt from "jsonwebtoken";
import sendEmail from "../../helpers/sendEmail/sendEmail.js";

const getAllUser = async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const pageSize = 20;
  const count = await User.countDocuments();

  try {
    const getAllUser = await User.find({})
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort("-createdAt");
    res.json({
      page,
      page: Math.ceil(count / pageSize),
      total: count,
      allUsers: getAllUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    // const { firstName, lastName, email } = req.body;

    const user = await User.find({ _id: req.user.id });

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        email,
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

const passwordReset = async (req, res) => {
  try {
    const { error } = passwordResetValidationSchema(req.body);

    if (error) {
      return res
        .status(400)
        .send({ error: true, message: error.details[0].message });
    }

    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "User with this email does not exist" });
    }

    const secret = process.env.ACCESS_TOKEN_PRIVATE_KEY + user.password;

    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "5m",
    });

    const url = `${process.env.RESET_PASSWORD_URL}${user._id}/${token}/`;
    await sendEmail(user.email, "Password Reset", url);

    res.status(200).json({
      error: false,
      message: "Password reset link sent to your email account",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    if (user.roles === "admin") {
      return res
        .status(400)
        .json({ error: true, message: "You cannot delete the Admin account!" });
    }

    await user.deleteOne();
    res
      .status(200)
      .json({ error: false, message: "User deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

export default {
  getAllUser,
  getUserById,
  updateUserById,
  passwordReset,
  deleteUserById,
  getUser,
};
