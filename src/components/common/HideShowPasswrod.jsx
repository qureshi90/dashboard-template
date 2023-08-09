/* eslint-disable react/prop-types */
import { useState } from "react";
import { Eye, slashEye } from "../../assets/images";
import { Link } from "react-router-dom";
const HideShowPasswrod = (props) => {
  const [togglePassoword, setTogglePassword] = useState(true);
  return (
    <>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium" htmlFor="password">
          PASSWORD
        </label>
        <Link
          className="text-[#696CFF] hover:text-[#788FFF] text-xs font-normal"
          to="/forgotpassword"
        >
          {props.forgot}
        </Link>
      </div>
      <div className="relative mt-3 mb-3">
        <img
          className="h-4 w-4  mt-3 absolute right-2 text-[#697a8d]"
          src={togglePassoword ? Eye : slashEye}
          alt=""
          onClick={() => setTogglePassword(!togglePassoword)}
        />
        <input
          className="w-full h-10 text-lg pl-3 m-px border-gray-300 border outline-none focus:border-[#696CFF] rounded-md"
          type={togglePassoword ? "text" : "password"}
          name="password"
          placeholder="........."
        />
      </div>
    </>
  );
};

export default HideShowPasswrod;
