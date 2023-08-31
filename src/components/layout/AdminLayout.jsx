/* eslint-disable react/prop-types */
import Sidebar from "../sideBar/Sidebar";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const AdminLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar setShow={setShow} />
      <Sidebar show={show} setShow={setShow} />
      <div
        className="lg:ml-64"
        style={{
          minHeight: "calc(100vh - 30px)",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
