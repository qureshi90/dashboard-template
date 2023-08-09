import {
  faArrowUp,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { chartSuccess, walletInfo, manLaptop } from "../../assets/images";
import Transection from "../../components/Elements/Transection";
import ReactApexchart from "../../ReactApexcharts";
// import Chart from "react-apexcharts";
const HomePage = () => {
  return (
    <>
      <div className="pt-8 mx-4 md:mx-10 lg:mx-20">
        <div className="flex gap-7 flex-wrap">
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
          <div className="flex  gap-7 flex-wrap">
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
              money="$12,628"
              profit="+72.80%"
            />
          </div>
        </div>
        <div className=" border border-slate-950 mt-7 flex gap-7">
          <div className="border w-[950px] flex md:flex-row flex-col shadow rounded-md bg-white h-[450px]">
            <p>Total Revenue</p>
            <div className="w-72  m-3 border border-slate-500 text-center p-6">
              <select className="w-20 px-3" name="val" id="val">
                <option className=" w-40" value="2020">
                  2020
                </option>
                <option value="2020">2022</option>
                <option value="2020">2021</option>
              </select>
              <ReactApexchart />
              {/* <div> */}
              {/* <Chart
                type="donut"
                width={300}
                height={200}
                series={[50, 50, 50, 50, 50]}
                options={{
                  labels: [
                    "series1",
                    "series2",
                    "series3",
                    "series4",
                    "series5",
                  ],
                }}
              /> */}
            </div>
          </div>
          <div className="border  border-slate-700  flex gap-7 flex-wrap h-fit">
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
              img={chartSuccess}
              icon={faArrowUp}
              text="Profit"
              money="$12,628"
              profit="+72.80%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
