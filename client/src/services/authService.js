import axios from "axios";


export const registerUser = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  return await axios.post(
    `${process.env.SERVER_HOST}/api/auth/register`,
    {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    },
    { withCredentials: true }
  );
};

export const loginUser = async (email, password) => {
  return await axios.post(
    `${process.env.SERVER_HOST}/api/auth/login`,
    {
      email,
      password,
    },
    {
      credentials: "include",
      withCredentials: true,
     
    }
  );
};

export const logoutUser = async () => {
  return await axios.get(`${process.env.SERVER_HOST}/api/auth/logout`, {
    credentials: "include",
    withCredentials: true,
  });
};
