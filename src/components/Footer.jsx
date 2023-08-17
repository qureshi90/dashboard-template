import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="lg:ml-64 mt-3">
      <div className="flex flex-wrap  md:mx-8 mx-4 xl:mx-20">
        <p>© {year}</p>
        <div>
          <Link className="pl-3 hover:text-black text-[#566A7F]" to={"#"}>
            License
          </Link>
          <Link className="px-3 hover:text-black text-[#566A7F]" to={"#"}>
            Documentation
          </Link>
          <Link className="px-3 hover:text-black text-[#566A7F]" to={"#"}>
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
