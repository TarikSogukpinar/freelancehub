import jwt from "jsonwebtoken";
import { getIpInformation } from "../../helpers/utils/ipify.js";
import { getLocationInformation } from "../../helpers/utils/location.js";
import User from "../../models/User.js";

const updateIpInformation = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(403)
      .json({ error: true, message: "Invalid Authentication." });
  }
  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);

    const getIp = await getIpInformation();
    const ipInformation = await getLocationInformation(getIp);
    console.log("ipInformation", ipInformation);

    await User.findByIdAndUpdate(
      user.userId,
      { ipInformation: ipInformation },
      { new: true }
    );

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export { updateIpInformation };
