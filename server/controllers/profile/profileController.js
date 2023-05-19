import Profile from "../../models/Profile.js";

const updateContactInformation = async (req, res) => {
  try {
    const { phoneNumber, linkedin, instagram, facebook, address } = req.body;
    const profile = await Profile.findOneAndUpdate(req.params.id, {
      phoneNumber,
      linkedin,
      instagram,
      facebook,
      address,
    });
    profile.save();

    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export default { updateContactInformation };
