import Button from "../../components/Elements/Button";
import HeadingParagraph from "../../components/Elements/HeadingParagraph";
import Inputfield from "../../components/Elements/Inputfield";
import Logo from "../../components/Elements/logo";
import { Link } from "react-router-dom";
import { download, download1 } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const ForgotPassword = () => {
	return (
		<>
			<div className="bg-[#F5F5F9]  h-screen flex  items-center justify-center">
				<div className="z-10">
					<div className="bg-white  text-[#697a8d] shadow-md relative w-[400px] p-5 rounded-lg">
						<div
							style={{ backgroundImage: `url(${download})` }}
							className="border w-[148px] -z-10 h-[148px] absolute bg-no-repeat bg-cover right-[-40px] top-[-40px]"
						></div>
						<Logo />
						<HeadingParagraph
							heading="Forgot Password? 🔒"
							paragraph="Enter your email and we will send you instructions to 
            reset your password"
						/>
						<Inputfield
							label="EMAIL"
							type="email"
							placeholder="Enter your email"
							htmlFor="email"
						/>
						<Button button="Send Reset Link" />
						<Link
							className="flex justify-center mt-3 items-center  text-[#696CFF] hover:text-[#788FFF] text-[15px]"
							to="/login"
						>
							<FontAwesomeIcon className="h-4 mr-1" icon={faChevronLeft} />
							Back to login
						</Link>
						<div
							style={{ backgroundImage: `url(${download1})` }}
							className="border -z-10 bg-no-repeat bg-cover w-[243px] h-[240px]  absolute bottom-[-110px] left-[-46px]"
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
