import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Transection = (props) => {
  return (
    <>
      {/* <div className="h-40 w-40 flex-grow shadow rounded-md bg-white"></div> */}
      <div className="p-6 w-52 shadow rounded-md bg-white flex-1">
        <FontAwesomeIcon
          className="float-right mt-2 mr-2 text-[#697A8D]"
          icon={props.ellipsisVertical}
        />
        <img className="h-10 " src={props.img} alt="" />
        <p className="text-lg text-[#697A8D] mt-2">{props.text}</p>
        <h1 className="text-[25px] text-[#566A7F]">{props.money}</h1>
        <div className="text-green-500 mt-2 flex items-center">
          <FontAwesomeIcon className="mr-2 " icon={props.icon} />
          <p className="">{props.profit}</p>
        </div>
      </div>
    </>
  );
};

export default Transection;
