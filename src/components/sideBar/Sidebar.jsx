import routes from "../../config/routes";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { favicon } from "../../assets/images";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faCircleDot } from "../../assets/images/icons";

const Item = ({ item }) => {
  const [rotate, setRotate] = useState(false);
  const togglerArrow = () => {
    setRotate(!rotate);
  };
  return (
    <>
      <li className="mx-2 rounded-lg first:text-[#6C6FFF] first:bg-[#E7E7FF] text-[#697a8d] hover:bg-[#F8F8F9] first:hover:bg-[#E7E7FF]">
        <NavLink
          onClick={togglerArrow}
          className={
            "my-1 relative p-2 font-normal flex items-center  h-11 w-60 "
          }
          to={item.Path}
        >
          <span>
            <FontAwesomeIcon className="h-5 w-5 ml-2" icon={item.icon} />
          </span>
          <span className="ml-5">{item.text}</span>
          <span>
            <FontAwesomeIcon
              className={`h-3 w-3 absolute right-3 top-4 ${
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
              to={item?.Path}
            >
              <FontAwesomeIcon
                className="ml-5 text-[#697a8d] h-3"
                icon={faCircleDot}
              />
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
        <div className="overlay z-10" onClick={() => setShow(false)}></div>
      ) : null}
      <div
        className={`w-64 h-full overflow-y-scroll sidebar lg:h-screen border bg-white shadow-lg fixed top-0 left-0 z-30 max-lg:transition-transform max-lg:-translate-x-full ${
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
          {routes.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
