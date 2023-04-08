import React from "react";
import Navbar from "@/components/layout/navbar/index";
import Footer from "@/components/layout/footer/index";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
