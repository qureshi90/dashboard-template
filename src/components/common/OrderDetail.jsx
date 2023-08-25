import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const OrderDetail = ({
  icon,
  orderTeype,
  detail,
  orderQuntity,
  backGroundColor,
  color,
  paddingLeftRight,
  image,
}) => {
  const [isIcon, setIsOpen] = useState(icon);
  return (
    <div className="flex items-center mt-5 justify-between relative">
      <div className="flex">
        <span>
          {isIcon ? (
            <FontAwesomeIcon
              className={`${backGroundColor}
            ${color}
            ${paddingLeftRight}

           py-3 px-4  shadow bg-[#E7E7FF] text-[#5F61E6] font-bold text-xl rounded -z-10`}
              icon={icon}
            />
          ) : (
            <img src={image} className="w-12 h-12" alt="" />
          )}
        </span>
        <div className="ml-2">
          <span className="text-[#6C7D8F] font-medium">{orderTeype}</span>
          <br />
          <span className="text-[#566A7F] text-sm font-normal">{detail}</span>
        </div>
      </div>
      <div className="flex text-[#6C7D8F]">
        <p>{orderQuntity}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
