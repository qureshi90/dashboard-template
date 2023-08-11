/* eslint-disable react/prop-types */
const HeadingParagraph = ({ heading, paragraph }) => {
  return (
    <div>
      <h1 className="text-[22px] mt-8 font-medium ">{heading}</h1>
      <p className="mt-2 mb-4 text-[15px] font-normal">{paragraph}</p>
    </div>
  );
};

export default HeadingParagraph;
