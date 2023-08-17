import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar, faBars } from "@fortawesome/free-solid-svg-icons";
import { profilepic } from "../assets/images/";
const Navbar = ({ setShow }) => {
  return (
    <>
      <div className="flex items-center lg:ml-64 mt-4 rounded-lg">
        <div className="flex items-center justify-between md:w-full bg-white rounded-md p-4 mx-4 md:mx-8 xl:mx-10 shadow">
          <div className="flex items-center">
            <FontAwesomeIcon
              className="mr-3 text-[#697A8D] h-5  block lg:hidden"
              icon={faBars}
              onClick={() => setShow(true)}
            />
            <FontAwesomeIcon
              className="text-[#697A8D] text-lg"
              icon={faSearch}
            />
            <input
              className="h-9 w-full pl-3 ml-1 outline-none"
              type="text"
              name="text"
              id="text"
              placeholder="Search"
            />
          </div>
          <div className=" bg-[#EDEFF2] relative px-1 mr-16 md:mr-24 border border-slate-500 flex items-center rounded">
            <FontAwesomeIcon icon={faStar} />
            <p className="px-1 border-r-2  border-slate-700">Star</p>
            <span className="pl-3 pr-2 bg-white text-black te">443</span>
            <img
              className="h-12 rounded-full  absolute right-[-65px]  md:right-[-80px]"
              src={profilepic}
              alt=""
            />
            <p className="h-[10px] w-[10px] absolute  right-[-60px] md:right-[-73px] top-[26px] bg-[#71dd37] rounded-full"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
