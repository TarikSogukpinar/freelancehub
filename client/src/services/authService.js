import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  register: async (firstName, lastName, password, email) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/register`,
        {
          firstName,
          lastName,
          password,
          email,
        }
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default authService;
