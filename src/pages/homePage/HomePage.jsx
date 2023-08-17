import {
  faArrowUp,
  faEllipsisVertical,
  faChevronDown,
  faChevronUp,
  faDollar,
  faMobile,
  faPersonHalfDress,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  chartSuccess,
  walletInfo,
  manLaptop,
  paypal,
  primary,
  wellte,
  success,
  chart,
  warning,
} from "../../assets/images";
import { useState } from "react";
import RedialBarChart from "../../apexchart/RedialBarChart";
import Transection from "../../components/elements/Transection";
import CircleProgressChart from "../../apexchart/CircleProgressChart";
import ColumnChart from "../../apexchart/ColumnChart";
import DropDown from "../../components/elements/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderDetail from "../../components/elements/OrderDetail";
import { faFutbol } from "@fortawesome/free-regular-svg-icons";
import LineChart from "../../apexchart/LineChart.jsx";
import DonutChart from "../../apexchart/DonutChart";
import ZoomAbleChart from "../../apexchart/ZoomAbleChart";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <div className="pt-6 mx-4 md:mx-8 xl:mx-10">
      <div className="flex gap-6 flex-wrap">
        <div className="flex-grow flex md:flex-row flex-col shadow rounded-xl bg-white">
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
        <div className="flex gap-6 flex-wrap max-xl:flex-grow">
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
      <div className="mt-6 flex gap-6 flex-wrap">
        <div className="flex shadow bg-white lg:flex-1 flex-grow max-sm:flex-wrap justify-center rounded-xl">
          <ColumnChart />
          <div className="relative h-96 md:w-[360px] max-sm:flex-grow p-3">
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-[#5F61E6] border flex items-center px-3 mt-3 border-[#5F61E6] text-[#5F61E6] hover:text-white rounded"
              >
                2021
                <FontAwesomeIcon className="h-3 ml-2" icon={faChevronDown} />
              </button>
            </div>
            <DropDown
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              btn1="2020"
              btn2="2019"
              btn3="2018"
            />
            <div className="mt-1">
              <CircleProgressChart />
            </div>
            <p className="text-center font-medium text-[#697A8D]">
              62% Company Growth
            </p>
            <div className="flex mt-7 justify-between">
              <OrderDetail
                paddingLeftRight="px-[14px]"
                icon={faDollar}
                orderTeype="2022"
                detail="$32.5k"
              />
              <OrderDetail
                orderTeype="2021"
                detail="$41.33k"
                image={walletInfo}
              />
            </div>
          </div>
        </div>
        <div className="max-xl:flex-grow">
          <div className="flex gap-6 flex-wrap">
            <Transection
              ellipsisVertical={faEllipsisVertical}
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
          <div className="p-5 shadow-md  bg-white flex flex-wrap justify-between items-center mt-6 rounded-xl">
            <div className="max-sm:flex flex-wrap items-center">
              <h1 className="text-lg">Profile Report</h1>
              <br />
              <button className="text-sm bg-[#FFF2D6]  text-[#FFAD06] rounded-full py-1 px-2 mt-1">
                YEAR 2021
              </button>
              <p className="mt-4 flex items-center text-green-500">
                <FontAwesomeIcon className="h-3 mr-1" icon={faChevronUp} />
                <span>68.2%</span>
              </p>
              <h1 className="text-2xl text-[#566A7F]">$84,686k</h1>
            </div>
            <div className="">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-6 mb-6 flex-grow">
        <div className="bg-white lg:w-[460px] p-6 rounded-xl flex-1 shadow-md">
          <FontAwesomeIcon
            className="float-right mt-1 cursor-pointer py-1 px-2"
            onClick={() => setDropDown(!dropDown)}
            icon={faEllipsisVertical}
          />
          <div className="float-right mr-40 mt-6">
            <DropDown
              setIsOpen={setDropDown}
              isOpen={dropDown}
              btn1="Select All"
              btn2="Refresh"
              btn3="Share"
            />
          </div>
          <h1 className="text-xl">Order Statistics</h1>
          <p className="text-sm text-[#566A7F]">42.82k Total Sales</p>
          <div className="mt-6text-[#566A7F] flex justify-between items-center">
            <div className="text-[#566A7F]">
              <h1 className="text-4xl ">8,258</h1>
              <p className="text-sm mt-3">Total Orders</p>
            </div>
            <div className="">
              <DonutChart />
            </div>
          </div>
          <div className="mt-3">
            <OrderDetail
              icon={faMobile}
              orderTeype="Electronic"
              detail="Mobile, Earbuds, TV"
              orderQuntity="82.5k"
            />
            <OrderDetail
              backGroundColor="bg-[#E8FADF]"
              color="text-[#71DD37]"
              icon={faPersonHalfDress}
              orderTeype="Fashion"
              detail="T-shirt, Jeans, Shoes"
              orderQuntity="23.8k"
            />
            <OrderDetail
              paddingLeftRight="px-[12px]"
              backGroundColor="bg-[#D7F5FC]"
              color="text-[#0DC5ED]"
              icon={faHouse}
              orderTeype="Decor"
              detail=" Fine Art, Dining"
              orderQuntity="849k"
            />
            <OrderDetail
              backGroundColor="bg-[#EBEEF0]"
              color="text-[#8996A6]"
              paddingLeftRight="px-[14px]"
              icon={faFutbol}
              orderTeype="Sports"
              detail="Football, Cricket Kit"
              orderQuntity="99"
            />
          </div>
        </div>
        <div className="bg-white lg:w-[460px] p-6 rounded-xl flex-1 shadow-md">
          <button className="bg-[#696CFF] text-white p-2 px-4 rounded-lg">
            Income
          </button>
          <button className="p-2 px-4 rounded-lg ml-2 text-[#566A7F] hover:text-[#5F61E6]">
            Expenses
          </button>
          <button className="p-2 px-4 rounded-lg ml-2 text-[#566A7F] hover:text-[#5F61E6]">
            Profit
          </button>
          <div className="flex items-end mt-5">
            <OrderDetail
              image={wellte}
              paddingLeftRight="px-[14px]"
              orderTeype="Total Balance"
              detail="$459.10"
            />
            <span className="-ml-10 text-[#71DD37]">
              <FontAwesomeIcon className="h-3 mr-2" icon={faChevronUp} />
              <span className="text-sm">42.9%</span>
            </span>
          </div>
          <div>
            <ZoomAbleChart />
          </div>
          <div className="flex items-center justify-center">
            <RedialBarChart />
            <div className="text-[#566A7F]">
              <span className="text-lg">Expenses This Week </span>
              <br />
              <span className="text-sm"> $39 less than last week</span>
            </div>
          </div>
        </div>
        <div className="bg-white lg:w-[440px] p-6 rounded-xl max-sm:flex-grow max-xl:flex-1 shadow-md">
          <FontAwesomeIcon
            className="float-right mt-1 cursor-pointer py-1 px-2"
            onClick={() => setIsDropDown(!isDropDown)}
            icon={faEllipsisVertical}
          />
          <div className="float-right mr-40 mt-4">
            <DropDown
              setIsOpen={setIsDropDown}
              isOpen={isDropDown}
              btn1="Select All"
              btn2="Refresh"
              btn3="Share"
            />
          </div>
          <h1 className="text-xl">Transactions</h1>
          <div className="mt-3">
            <OrderDetail
              image={paypal}
              orderTeype="Paypal"
              detail="Send money"
              orderQuntity="+82.6 USD"
            />
            <OrderDetail
              orderTeype="Wallet"
              detail=""
              orderQuntity="+270.69 USD"
              image={wellte}
            />
            <OrderDetail
              orderTeype="Transfer"
              detail="Refund"
              orderQuntity="+637.91 USD"
              image={chart}
            />
            <OrderDetail
              image={success}
              orderTeype="Credit Card"
              detail="Ordered Food"
              orderQuntity="-838.71 USD"
            />
            <OrderDetail
              image={wellte}
              orderTeype="Wallet"
              detail="Starbucks"
              orderQuntity="+203.33 USD"
            />
            <OrderDetail
              image={warning}
              orderTeype="Mastercard"
              detail="Ordered Food"
              orderQuntity=" -92.45 USD"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
