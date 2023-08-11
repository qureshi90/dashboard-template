import {
  faArrowUp,
  faEllipsisVertical,
  faChevronDown,
  faChevronUp,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import {
  chartSuccess,
  walletInfo,
  manLaptop,
  paypal,
  primary,
} from "../../assets/images";
import Transection from "../../components/elements/Transection";
import CircleProgressChart from "../../apexchart/CircleProgressChart";
import ColumnChart from "../../apexchart/ColumnChart";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };
  return (
    <>
      <div className="pt-8 mx-4 md:mx-8 xl:mx-20">
        <div className="flex gap-7  flex-wrap">
          <div className="flex-grow flex md:flex-row flex-col shadow rounded-md bg-white xl:h-[180px]">
            <div className="p-4  text-[#696CFF]">
              <p className=" text-lg ">Congratulations John! 🎉</p>
              <p className="mt-4 text-[#6F7F91] md:w-96 xl:w-[510px]">
                You have done 72% more sales today. Check your new badge in your
                profile.
              </p>
              <button className="text-sm px-2 py-1 mt-5 rounded border border-[#696CFF]  hover:bg-[#5F61E6] hover:text-white ">
                View Badges
              </button>
            </div>
            <div className="flex items-end justify-center px-3 pt-3 md:w-full">
              <img className="h-40 w-40" src={manLaptop} alt="" />
            </div>
          </div>
          <div className="flex  gap-7 flex-wrap max-xl:flex-grow ">
            <Transection
              ellipsisVertical={faEllipsisVertical}
              img={chartSuccess}
              icon={faArrowUp}
              text="Profit"
              money="$12,628"
              profit="+72.80%"
            />
            <Transection
              ellipsisVertical={faEllipsisVertical}
              img={walletInfo}
              icon={faArrowUp}
              text="Sales"
              money="$4,679"
              profit="+28.42%"
            />
          </div>
        </div>
        <div className="mt-7 flex gap-7 flex-wrap">
          <div className="flex shadow bg-white lg:flex-1 flex-grow 1 max-sm:flex-wrap justify-center md:justify-normal rounded-md">
            <ColumnChart />
            <div className="relative h-96 max-sm:flex-grow border border-slate-700 p-3">
              <div className="flex justify-center">
                <button
                  onClick={toggleDropdown}
                  className="hover:bg-[#5F61E6] border flex items-center px-3 mt-3 border-[#5F61E6] text-[#5F61E6] hover:text-white rounded"
                >
                  2021
                  <FontAwesomeIcon className="h-3 ml-2" icon={faChevronDown} />
                </button>
              </div>
              {isOpen && (
                <div className="shadow-xl p-1 bg-white cursor-pointer rounded-md w-48 absolute -left-5 z-10">
                  <button
                    className="w-full p-1 hover:bg-[#F8F8F9] rounded-md flex items-start"
                    onClick={() => handleItemClick("")}
                  >
                    2020
                  </button>
                  <button
                    className="w-full p-1 hover:bg-[#F8F8F9] rounded-md flex items-start"
                    onClick={() => handleItemClick()}
                  >
                    2019
                  </button>
                  <button
                    className="w-full p-1 hover:bg-[#F8F8F9] rounded-md flex items-start"
                    onClick={() => handleItemClick()}
                  >
                    2018
                  </button>
                </div>
              )}
              <CircleProgressChart />
              <p className="text-center font-medium text-[#697A8D]">
                62% Company Growth
              </p>
              <div className="flex items-center mt-7 relative">
                <FontAwesomeIcon
                  className="py-3 px-4 shadow bg-[#E7E7FF] text-[#5F61E6] font-bold text-xl rounded"
                  icon={faDollar}
                />
                <div className="ml-2">
                  <span className="text-[#6C7D8F] text-sm">2022</span>
                  <br />
                  <span className="text-[#566A7F]">$32.5k</span>
                </div>
                <img
                  className="w-11 shadow bg-[#E7E7FF] text-[#5F61E6] font-bold text-xl rounded ml-28"
                  src={walletInfo}
                />
                <div className="ml-2">
                  <span className="text-[#6C7D8F] text-sm">2022</span>
                  <br />
                  <span className="text-[#566A7F]">$32.5k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" flex-wrap flex gap-7 max-xl:flex-grow">
              <Transection
                ellipsisVertical={faEllipsisVertical}
                Payments
                img={paypal}
                icon={faArrowUp}
                text="Payments"
                money="  $2,456"
                profit="-14.82%"
                isRed={true}
              />
              <Transection
                ellipsisVertical={faEllipsisVertical}
                img={primary}
                icon={faArrowUp}
                text="Transactions"
                money="$14,857"
                profit="+28.14%"
              />
            </div>
            <div className="w-full h-40 p-5 mt-7 shadow-md rounded bg-white">
              <h1 className="text-lg">Profile Report</h1>
              <button className="text-sm bg-[#FFF2D6]  text-[#FFAD06] rounded-full py-1 px-2 mt-1">
                YEAR 2021
              </button>
              <p className="mt-1 flex items-center text-green-500">
                <FontAwesomeIcon className="h-3 mr-1" icon={faChevronUp} />
                <span>68.2%</span>
              </p>
              <h1 className="text-2xl text-[#566A7F]">$84,686k</h1>
            </div>
          </div>
        </div>
        <div className="h-96 bg-black w-80"></div>
      </div>
    </>
  );
};

export default HomePage;
