import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import loginValidation from "../../validations/authValidation/loginValidationSchema.js";
import { generateToken } from "../../helpers/tokens/generateToken.js";

const loginUser = async (req, res) => {
  try {
    const { error } = loginValidation(req.body);

    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Email or password is wrong" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ error: true, message: "Email or password is wrong" });
    }

    const checkUserEmailIsVerify = await user.checkEmail;
    console.log("check email", checkUserEmailIsVerify);

    if (!checkUserEmailIsVerify) {
      return res.status(400).json({
        error: true,
        message: "Email is not a valid email please confirm your email!",
      });
    }

    const token = await generateToken(user);

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None", //cross-site cookie
      maxAge: 60 * 60 * 24 * 1000,
    };

    res.cookie("token", token, cookieOptions);

    res
      .status(200)
      .json({ data: user, message: "Login Succesfully!", tokens: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

export default { loginUser };
