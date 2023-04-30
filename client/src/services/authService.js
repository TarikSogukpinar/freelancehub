import axios from "axios";

export const registerUser = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  return await axios.post(
    `/api/register`,
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
    `/api/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
};

export const logoutUser = async () => {
  return await axios.get(`/api/logout`, {
    credentials: "include",
    withCredentials: true,
  });
};
