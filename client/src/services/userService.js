import axios from "axios";

export const getUserLocationInformation = async () => {
  return await axios.get(
    `${process.env.SERVER_HOST}/api/user/getUserLocationInformation`,
    {
      withCredentials: true,
    }
  );
};
