import User from "../../models/User.js";

const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "User with this email does not exist" });
    }

    await User.updateOne({ _id: user._id, checkEmail: true });
    res.status(201).json({ message: "Email verified successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

export default { verifyEmail };
