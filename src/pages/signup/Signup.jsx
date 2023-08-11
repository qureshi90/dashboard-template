import { Link } from "react-router-dom";
import HideShowPasswrod from "../../components/Common/HideShowPasswrod";
import Button from "../../components/elements/Button";
import HeadingParagraph from "../../components/elements/HeadingParagraph";
import InputField from "../../components/elements/InputField";
import Logo from "../../components/elements/logo";

const Signup = () => {
  return (
    <>
      <div className="bg-[#F5F5F9] h-screen flex items-center justify-center">
        <div className="bg-white text-[#697a8d]  shadow-md w-[400px]  p-5 rounded-lg">
          <Logo />
          <HeadingParagraph
            heading="Adventure starts here 🚀"
            paragraph="Make your app management easy and fun!"
          />
          <InputField
            label="USERNAME"
            type="text"
            placeholder="Enter your user name"
            htmlFor="text"
          />
          <InputField
            label="EMAIL"
            type="email"
            placeholder="Enter your email"
            htmlFor="email"
          />
          <HideShowPasswrod />
          <div className="flex items-center mt-4 m-px">
            <input
              className="h-5 w-5 focus:border-[#788FFF] rounded-lg border"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label className="ml-2 text-base 	font-normal " htmlFor="checkbox">
              I agree
              <a
                className="ml-1 text-[#696CFF] hover:text-[#788FFF]"
                href="http://"
              >
                privacy policy & terms
              </a>
            </label>
          </div>
          <div className="mt-3 mb-3">
            <Button button="Sign up" />
            <p className=" text-center text-base font-normal mt-3 ">
              Already have an account?
              <Link
                className="text-[#696CFF] hover:text-[#788FFF] text-base	font-normal ml-1"
                to="/login"
              >
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
