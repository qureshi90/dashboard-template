import sidebarRoutes from "../utiles/sidebarRoutes";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { favicon } from "../assets/images";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ item }) => {
  const [rotate, setRotate] = useState(false);
  const togglerArrow = () => {
    setRotate(!rotate);
  };

  return (
    <>
      <li className="">
        <NavLink
          onClick={togglerArrow}
          className={
            "mx-2 my-1( relative text-[#697a8d] p-2 font-normal flex items-center hover:bg-[#F8F8F9] h-11 w-60 rounded-lg "
          }
          to={item.route}
        >
          <span>
            <FontAwesomeIcon className="h-5 w-5 ml-2" icon={item.icon} />
          </span>
          <span className="ml-5">{item.text}</span>
          <span>
            <FontAwesomeIcon
              className={`h-3 w-3  absolute right-3 top-4 ${
                rotate
                  ? "rotate-90 ease-in duration-300"
                  : "ease-in duration-300"
              }`}
              icon={item.arrow}
            />
          </span>
        </NavLink>
      </li>
      {rotate && item?.children?.length > 0 && (
        <div>
          {item?.children?.map((item, index) => (
            <NavLink
              className="mx-2 my-1 relative text-[#697a8d] p-2 font-normal flex items-center hover:bg-[#F8F8F9] h-11 w-60 rounded-lg"
              key={index}
              to={item.route}
            >
              <FontAwesomeIcon className="ml-5" icon={item.icon} />
              <p className="ml-5">{item?.text}</p>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

const Sidebar = ({ show, setShow }) => {
  return (
    <>
      {show ? (
        <div
          className="fixed h-full w-full top-0 left-0 flex items-center justify-center transition-transform bg-black bg-opacity-50 z-0"
          onClick={() => setShow(false)}
        ></div>
      ) : null}
      <div
        className={`w-64 h-full lg:h-screen border bg-white shadow-md fixed top-0 left-0 sm:z-10 max-lg:transition-transform max-lg:-translate-x-full  ${
          show ? "max-lg:translate-x-0" : null
        }`}
      >
        <div className="flex mt-3 mx-2 p-3  mb-3 items-center">
          <Link className="flex" to="/home">
            <img src={favicon} alt="" className="h-8" />
            <p className="text-3xl font-bold">sneat</p>
          </Link>
        </div>
        <ul>
          {sidebarRoutes.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
