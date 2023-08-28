import {
  faArrowDown,
  faArrowUp,
  faBars,
  faCalendarDay,
  faQuestion,
  faSignal,
  faTags,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderCard from "../../components/elements/OrderCard";
import OrderData from "./OrderData";

const Orders = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-10 mt-6 shadow-lg rounded-lg bg-[#FFFFFF] font-sans">
      <div className="flex ml-8 pt-8 items-center">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <FontAwesomeIcon className="ml-2" icon={faQuestion} />
      </div>
      <div className="xl:mx-8 mx-2 mt-8 flex flex-wrap items-center justify-between gap-6">
        <OrderCard
          orderHeading="New Orders"
          orderQunatity="224"
          orderPercentage="20%"
          backgroundColor="bg-[#ECF6FF]"
          orderIcon={faArrowUp}
          quantityColor="text-[#1D56AF]"
          arrowColor="text-[#1D56AF]"
        />
        <OrderCard
          orderHeading="Panding Orders"
          orderQunatity="123"
          orderPercentage="11%"
          backgroundColor="bg-[#F6F4FF]"
          orderIcon={faArrowDown}
          quantityColor="text-[#5842BF]"
          arrowColor="text-[#5842BF]"
        />
        <OrderCard
          orderHeading="Delivered Orders"
          orderQunatity="150"
          orderPercentage="18%"
          orderIcon={faArrowUp}
          quantityColor="text-[#FA5F1D]"
          arrowColor="text-[#FA5F1D]"
          backgroundColor="bg-[#FFECE6]"
        />
        <OrderCard
          orderHeading="Booked Orders"
          orderQunatity="300"
          orderPercentage="27%"
          backgroundColor="bg-[#E1F2F9]"
          orderIcon={faArrowUp}
          quantityColor="text-[#5842be]"
          arrowColor="text-[#5842be]"
        />
      </div>
      <div className="flex flex-wrap justify-between mx-2 xl:mx-8 mt-12 px-5 text-lg pt-2">
        <p className="pb-6 text-[#5842BF] font-bold border-b-4 border-[#5842BF] cursor-pointer">
          All Orders
        </p>
        <p className="pb-6 hover:text-[#5842BF] font-bold hover:border-b-4 border-[#5842BF] cursor-pointer">
          Pending Orders
        </p>
        <p className="pb-6 hover:text-[#5842BF] font-bold hover:border-b-4 border-[#5842BF] cursor-pointer">
          Delivered Orders
        </p>
        <p className="pb-6 hover:text-[#5842BF] font-bold hover:border-b-4 border-[#5842BF] cursor-pointer">
          Booked Orders
        </p>
        <p className="pb-6 hover:text-[#5842BF] font-bold hover:border-b-4 border-[#5842BF] cursor-pointer">
          Cancelled Orderes
        </p>
      </div>
      <div className="flex flex-wrap justify-between xl:mx-8 mx-2 mt-8 text-lg py-4">
        <p className="">
          <FontAwesomeIcon className="mr-4 text-[#1D56AF]" icon={faBars} />
          Oreder ID
        </p>
        <p className="">
          <FontAwesomeIcon
            className="mr-4 text-[#FA5F1D]"
            icon={faCalendarDay}
          />
          Ordered Date
        </p>
        <p className="">
          <FontAwesomeIcon
            className="mr-4  text-[#5842BF]"
            icon={faWindowMaximize}
          />
          Product Name
        </p>
        <p className="">
          <FontAwesomeIcon className="mr-4  text-green-400" icon={faTags} />
          Product Price
        </p>
        <p className="">
          <FontAwesomeIcon className="mr-4  text-[#5842BF]" icon={faSignal} />
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
            <p className="">{item.date}</p>
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
