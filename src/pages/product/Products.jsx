import AddProduct from "./AddProduct";
import ProductData from "./ProductData";
import { useState } from "react";
const Products = () => {
  const [showModal, setShowModal] = useState();
  return (
    <>
      {showModal ? (
        <div className="overlay z-30" onClick={() => setShowModal(false)}></div>
      ) : null}

      <div className="mx-4 md:mx-8 xl:mx-10 flex flex-wrap gap-6 mt-6 mb-5 justify-between">
        {ProductData.map((item, index) => (
          <div
            className="w-[279px] rounded-lg bg-white shadow-lg flex flex-col max-xl:flex-grow"
            key={index}
          >
            <img className="h-[300px] rounded-lg" src={item.img} alt="" />
            <p className="mt-3 text-lg px-2">{item.title}</p>
            <p className="text-lg mt-2 text-[#F59187] px-2">
              Rs.<b>{item.price}</b>
            </p>
            <p className="text-sm my-1 mx-2">{item.description}</p>
          </div>
        ))}
        <div className="flex w-full justify-end relative">
          <button
            className="fixed bottom-2 w-16 h-16 text-5xl rounded-full bg-[#695CFF] hover:bg-[#694CFF] text-white"
            onClick={() => setShowModal(true)}
          >
            +
          </button>
        </div>
        {showModal ? <AddProduct /> : null}
      </div>
    </>
  );
};

export default Products;
