import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "./DropDown";
const Transection = ({
  text,
  money,
  img,
  icon,
  isRed,
  profit,
  ellipsisVertical,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-6 w-52 shadow rounded-xl bg-white  flex-1 sm:flex-grow">
      <FontAwesomeIcon
        onClick={() => setIsOpen(!isOpen)}
        className="float-right mt-2 mr-2 text-[#697A8D] px-2 py-1 cursor-pointer"
        icon={ellipsisVertical}
      />
      <img className="h-10 " src={img} alt="" />
      <div className="-mt-1">
        <DropDown
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          btn1="View More"
          btn2="delete"
        />
      </div>
      <p className="text-lg text-[#697A8D] mt-2">{text}</p>
      <h1 className="text-[25px] text-[#566A7F]">{money}</h1>
      <div
        className={`${
          isRed ? "text-red-500" : "text-green-500"
        }  mt-2 flex items-center`}
      >
        <FontAwesomeIcon className="mr-2 " icon={icon} />
        <p className="">{profit}</p>
      </div>
    </div>
  );
};

export default Transection;
