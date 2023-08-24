import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-10 mt-6 shadow-lg h-screen rounded-lg bg-white">
      <div className="flex ml-6 pt-8 items-center">
        <h1 className="text-3xl">Order Details</h1>
        <FontAwesomeIcon className="ml-2" icon={faQuestion} />
      </div>
      <div className="mx-6 mt-8 flex gap-6">
        <div className="h-32 w-64 bg-[#ECF6FF] rounded-lg"></div>
        <div className="h-32 w-64 bg-[#F6F4FF] rounded-lg"></div>
        <div className="h-32 w-64 bg-[#FFECE6] rounded-lg "></div>
      </div>
    </div>
  );
};

export default Orders;
