import React from "react";
import Navbar from "../../components/Navbar";
import EmailVerification from "../../components/verify/EmailVerification";
import Footer from "../../components/Footer";

export default function emailverification() {
  return (
    <div className="flex h-screen flex-col justify-between items-between">
      <Navbar />
      <EmailVerification />
      <Footer />
    </div>
  );
}
