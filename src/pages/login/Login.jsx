import Logo from "../../components/Elements/logo";
import Inputfield from "../../components/Elements/Inputfield";
import HeadingParagraph from "../../components/Elements/HeadingParagraph";
import Common from "../../components/Common/Common";
import Button from "../../components/Elements/Button";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<>
			<div className="bg-[#F5F5F9] h-screen flex items-center justify-center">
				<div className="bg-white text-[#697a8d] shadow-md w-[400px]  p-5 rounded-lg">
					<Logo />
					<HeadingParagraph
						heading="Welcome to Sneat! 👋"
						paragraph="Please sign-in to your account and start the adventure"
					/>
					<Inputfield
						label="EMAIL OR USERNAME"
						type="email"
						placeholder="Enter your email or username"
						htmlFor="email"
					/>
					<Common forgot="Forgot Password?" />
					<div className="flex items-center mt-4 m-px">
						<input
							className="h-5 w-5 rounded-lg border border-blue-600"
							type="checkbox"
							name="checkbox"
							id="checkbox"
						/>
						<label className="ml-2 text-base font-normal " htmlFor="checkbox">
							Remember Me
						</label>
					</div>
					<div className="mt-3 mb-3">
						<Button button="Sign in" />
						<p className=" text-center text-base font-normal mt-3 ">
							New on our platform?
							<Link
								className="text-[#696CFF] hover:text-[#788FFF] text-base	font-normal ml-1"
								to="/signup"
							>
								Create an account
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
