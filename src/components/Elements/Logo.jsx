import { Link } from "react-router-dom";
import { favicon } from "../../assets/images";
const Logo = () => {
  return (
    <>
      <div className="flex mt-5 justify-center items-center">
        <Link className="flex" to="/home">
          <img src={favicon} alt="" className="h-9" />
          <p className="text-3xl font-bold">sneat</p>
        </Link>
      </div>
    </>
  );
};

export default Logo;
