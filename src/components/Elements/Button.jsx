/* eslint-disable react/prop-types */
const Button = (props) => {
	return (
		<>
			<button className="h-10 w-full bg-[#696CFF] hover:bg-[#5F61E6] text-white text-base	font-normal rounded-lg">
				{props.button}
			</button>
		</>
	);
};

export default Button;
