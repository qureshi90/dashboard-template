const DropDown = ({ isOpen, setIsOpen, btn1, btn2, btn3 }) => {
  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      {isOpen && (
        <div className="shadow-xl p-1 bg-white cursor-pointer rounded-md w-48 absolute -left-5 z-20 text-[#697A8D]">
          <button
            className="w-full p-1 hover:bg-[#F8F8F9] rounded-md flex items-start"
            onClick={() => handleItemClick()}
          >
            {btn1}
          </button>
          <button
            className="w-full p-1 hover:bg-[#F8F8F9] rounded-md flex items-start"
            onClick={() => handleItemClick()}
          >
            {btn2}
          </button>
          <button
            className="w-full p-1 hover:bg-[#F8F8F9] rounded-md flex items-start"
            onClick={() => handleItemClick()}
          >
            {btn3}
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
