/* eslint-disable react/prop-types */
const Inputfield = (props) => {
	console.log(props);
	return (
		<>
			<label className="text-xs font-medium" htmlFor={props.htmlFor}>
				{props.label}
			</label>
			<div className="m-px mt-3 mb-3">
				<input
					className="w-full h-10 pl-3 border border-gray-300 outline-none focus:border-[#696CFF] rounded-md"
					type={props.type}
					name="email"
					placeholder={props.placeholder}
				/>
			</div>
		</>
	);
};

export default Inputfield;
