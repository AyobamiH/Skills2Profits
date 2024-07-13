/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
