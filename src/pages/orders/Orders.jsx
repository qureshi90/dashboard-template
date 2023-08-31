import order from "../../constant/order";
import * as icon from "../../assets/images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderCard from "../../components/elements/OrderCard";
import OrderData from "./OrderData";

const Orders = () => {
  const str = [
    "Pending Orders",
    "Delivered Orders",
    "Booked Orders",
    "Cancelled Orders",
  ];
  return (
    <div className="mx-4 md:mx-8 xl:mx-10 mt-6 shadow-lg rounded-lg bg-[#FFFFFF] font-sans">
      <div className="flex ml-8 pt-8 items-center">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <FontAwesomeIcon className="ml-2" icon={icon.faQuestion} />
      </div>
      <div className="xl:mx-8 mx-2 mt-8 flex flex-wrap items-center justify-between gap-6">
        {order.map((item, index) => (
          <OrderCard
            key={index}
            orderHeading={item.orderHeading}
            orderQuantity={item.orderQuantity}
            orderPercentage={item.orderPercentage}
            backgroundColor={item.backgroundColor}
            orderIcon={item.orderIcon}
            quantityColor={item.quantityColor}
            arrowColor={item.arrowColor}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-between mx-2 xl:mx-8 mt-12 px-5 text-lg pt-2">
        <p className="pb-6 text-[#5842BF] font-bold border-b-4 border-[#5842BF] cursor-pointer">
          All Orders
        </p>
        {str.map((item, index) => (
          <p
            key={index}
            className="pb-6 hover:text-[#5842BF] font-bold hover:border-b-4 border-[#5842BF] cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-between xl:mx-8 mx-2 mt-8 text-lg py-4">
        <p>
          <FontAwesomeIcon className="mr-4 text-[#1D56AF]" icon={icon.faBars} />
          Order ID
        </p>
        <p>
          <FontAwesomeIcon
            className="mr-4 text-[#FA5F1D]"
            icon={icon.faCalendarDay}
          />
          Ordered Date
        </p>
        <p>
          <FontAwesomeIcon
            className="mr-4  text-[#5842BF]"
            icon={icon.faWindowMaximize}
          />
          Product Name
        </p>
        <p>
          <FontAwesomeIcon
            className="mr-4  text-green-400"
            icon={icon.faTags}
          />
          Product Price
        </p>
        <p>
          <FontAwesomeIcon
            className="mr-4  text-[#5842BF]"
            icon={icon.faSignal}
          />
          Status
        </p>
      </div>
      <div className="xl:mx-8 mx-2 mt-6 text-lg pb-6">
        {OrderData.map((item, index) => (
          <div
            className="flex flex-wrap justify-between text-lg py-6 font-serif border-b-2"
            key={index}
          >
            <p>{item.id}</p>
            <p>{item.date}</p>
            <p>{item.name}</p>
            <p>Rs.{item.price}</p>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
