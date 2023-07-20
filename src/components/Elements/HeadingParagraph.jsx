/* eslint-disable react/prop-types */
const HeadingParagraph = (props) => {
	return (
		<div>
			<h1 className="text-[22px] mt-8 font-medium ">{props.heading}</h1>
			<p className="mt-2 mb-4 text-base font-normal">{props.paragraph}</p>
		</div>
	);
};

export default HeadingParagraph;
