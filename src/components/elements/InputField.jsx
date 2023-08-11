/* eslint-disable react/prop-types */
const InputField = ({ htmlFor, label, type, placeholder }) => {
  return (
    <>
      <label className="text-xs font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="m-px mt-3 mb-3">
        <input
          className="w-full h-10 pl-3 border border-gray-300 outline-none focus:border-[#696CFF] rounded-md"
          type={type}
          name="email"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputField;
