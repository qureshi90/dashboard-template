import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="lg:ml-64 mt-3">
      <div className="md:flex  md:mx-8 mx-4">
        <div>
          <p>
            © {year}
            <Link className="hover:text-black text-[#566A7F] ml-2" to={"#"}>
              ThemeSelection
            </Link>
          </p>
        </div>
        <div>
          <Link className="pr-3 hover:text-black text-[#566A7F]" to={"#"}>
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
