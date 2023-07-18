// import React from "react";
import fav from "../../assets/images/favicon/favicon.ico";
import Eye from "../../assets/images/icons/eye.svg";
import slashEye from "../../assets/images/icons/slashEye.svg";
import { useState } from "react";
const Login = () => {
	const [togglePassoword, setTogglePassword] = useState(true);
	return (
		<>
			<div className="bg-[#F5F5F9] h-screen flex items-center justify-center">
				<div className="bg-white text-[#697a8d] shadow-md w-[400px] h-[550px] p-5 rounded-lg">
					<div className="flex mt-5 justify-center items-center">
						<a className="flex" href="http://">
							<img src={fav} alt="" className="h-9" />
							<p className="text-3xl font-bold">sneat</p>
						</a>
					</div>
					<h1 className="text-[22px] mt-8 font-medium ">
						Welcome to Sneat! 👋
					</h1>
					<p className="mt-2 mb-4 text-base font-normal">
						Please sign-in to your account and start the adventure
					</p>

					<label className="text-xs font-medium" htmlFor="email">
						EMAIL OR USERNAME
					</label>
					<br />
					<div className="m-1  mt-3 mb-3">
						<input
							className="w-full h-10 pl-3   border border-gray-300 outline-none focus:border-[#696CFF] rounded-md"
							type="email"
							name="email"
							placeholder="Enter your email or username"
						/>
					</div>
					<label className="text-xs font-medium" htmlFor="password">
						PASSWORD
					</label>
					<a
						className="float-right text-[#696CFF] hover:text-[#788FFF] text-xs font-normal"
						href="#"
					>
						Forgot Password?
					</a>
					<div className="relative m-1 ron mt-2">
						<img
							className="h-4 w-4  mt-3 absolute right-2 text-[#697a8d]"
							src={togglePassoword ? Eye : slashEye}
							alt=""
							onClick={() => setTogglePassword(!togglePassoword)}
						/>
						<input
							className="w-full h-10 text-lg pl-3  border-gray-300 border outline-none focus:border-[#696CFF] rounded-md"
							type={togglePassoword ? "text" : "password"}
							name="password"
						/>
					</div>
					<div className="flex items-center mt-4 ml-1">
						<input
							className=" justify-between h-5 w-5 rounded-3xl"
							type="checkbox"
							name="checkbox"
							id="checkbox"
						/>
						<label className="ml-2 text-base	font-normal " htmlFor="checkbox">
							Remember Me
						</label>
					</div>
					<div className="mt-3">
						<button className="h-10 w-full bg-[#696CFF] hover:bg-[#5F61E6] text-white text-base	font-normal rounded-lg">
							Sign in
						</button>
						<p className=" text-center text-base font-normal mt-3">
							New on our platform?
							<a
								className="text-[#696CFF] hover:text-[#788FFF] text-base	font-normal ml-1"
								href="#"
							>
								Create an account
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
