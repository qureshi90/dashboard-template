/* eslint-disable react/prop-types */
import { favicon } from "../../assets";
const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex mt-5 justify-center items-center">
      <img src={favicon} alt="" className="h-9" />
      <p className="text-3xl font-bold">sneat</p>
    </div>
  );
};

export default Logo;
