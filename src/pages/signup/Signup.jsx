import { Link } from "react-router-dom";
import Common from "../../components/Common/Common";
import Button from "../../components/Elements/Button";
import HeadingParagraph from "../../components/Elements/HeadingParagraph";
import Inputfield from "../../components/Elements/Inputfield";
import Logo from "../../components/Elements/logo";

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
					<Inputfield
						label="USERNAME"
						type="text"
						placeholder="Enter your user name"
						htmlFor="text"
					/>
					<Inputfield
						label="EMAIL"
						type="email"
						placeholder="Enter your email"
						htmlFor="email"
					/>
					<Common />
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
