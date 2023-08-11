import { favicon } from "../../assets/images";
const Logo = () => {
	return (
		<>
			<div className="flex mt-5 justify-center items-center">
				<a className="flex" href="http://">
					<img src={favicon} alt="" className="h-9" />
					<p className="text-3xl font-bold">sneat</p>
				</a>
			</div>
		</>
	);
};

export default Logo;
