import axios from "axios";

export const updateContactInformation = async (
  phoneNumber,
  linkedin,
  instagram,
  facebook,
  address
) => {
  return await axios.post(
    `${process.env.SERVER_HOST}/api/profile/updateContactInformation`,
    {
      phoneNumber,
      linkedin,
      instagram,
      facebook,
      address,
    },
    { withCredentials: true }
  );
};
