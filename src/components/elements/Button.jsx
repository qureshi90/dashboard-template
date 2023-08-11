/* eslint-disable react/prop-types */
const Button = ({ button }) => {
  return (
    <>
      <button className="h-10 w-full bg-[#696CFF] hover:bg-[#5F61E6] text-white text-base	font-normal rounded-lg">
        {button}
      </button>
    </>
  );
};

export default Button;
