import React from "react";
import Navbar from "../../components/Navbar";
import EmailVerification from "../../components/verify/EmailVerification";
import Footer from "../../components/Footer";

export default function emailverification({ userData, cookies }) {
  return (
    <div className="flex h-screen flex-col justify-between items-between">
      <Navbar userData={userData} cookies={cookies} />
      <EmailVerification />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  let userData = null;

  const token = context.req.cookies.token;

  if (token) {
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/getUser",
        {
          method: "GET",
          headers: {
            Cookie: `token=${token}`,
          },
        },
        { withCredentials: true, credentials: "include" }
      );

      const data = await res.json();

      userData = data;
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  }

  return {
    props: {
      userData,
    },
  };
}
