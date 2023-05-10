import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import registerValidationSchema from "../../validations/authValidation/registerValidationSchema.js";
import Profile from "../../models/Profile.js";
import jwt from "jsonwebtoken";
import sendEmail from "../../helpers/sendEmail/sendEmail.js";

const registerUser = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const { error } = registerValidationSchema(req.body);
    if (error) {
      return res
        .status(400)
        .json({ error: true, message: error.details[0].message });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: true,
        message: "You cannot register, Email already exist",
      });
    }

    const saltPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltPassword);
    const hashConfirmPassword = await bcrypt.hash(
      confirmPassword,
      saltPassword
    );

    const data = new User({
      ...req.body,
      password: hashPassword,
      confirmPassword: hashConfirmPassword,
    });

    await data.save();

    const {
      profilePicture,
      bio,
      location,
      skills,
      phoneNumber,
      portfolio,
      workHours,
      certifications,
      linkedin,
      instagram,
      facebook,
    } = req.body;

    const profileInformation = new Profile({
      userId: data._id,
      profilePicture: profilePicture,
      bio: bio,
      location: location,
      skills: skills,
      phoneNumber: phoneNumber,
      portfolio: portfolio,
      workHours: workHours,
      certifications: certifications,
      linkedin: linkedin,
      instagram: instagram,
      facebook: facebook,
    });

    await profileInformation.save();

    //Verify Email

    const secret = process.env.ACCESS_TOKEN_PRIVATE_KEY + data.password;
    const token = jwt.sign({ email: data.email, id: data._id }, secret, {
      expiresIn: "1h",
    });

    const sendVerifyEmail = `${process.env.VERIFY_EMAIL_URL}/${data._id}/${token}/`;
    await sendEmail(data.email, "Verify Email", sendVerifyEmail);

    res.status(200).json({
      error: false,
      data: data,
      message: "Account Created Succesfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

export default { registerUser };
