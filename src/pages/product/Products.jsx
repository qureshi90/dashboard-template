import AddProduct from "./AddProduct";
import { useState, useEffect } from "react";
const Products = () => {
  const [showModal, setShowModal] = useState();
  const [data, setData] = useState([]);
  const getProduct = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const actualData = await result.json();
    console.log(actualData, "title");
    setData(actualData);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {showModal ? (
        <div className="overlay z-30" onClick={() => setShowModal(false)}></div>
      ) : null}

      <div className="mx-4 md:mx-8 xl:mx-10 flex flex-wrap gap-6 mt-6 mb-5 justify-between">
        {data.map((item) => (
          <div
            className="w-[279px] rounded-lg bg-white shadow-lg flex flex-col max-xl:flex-grow"
            key={item.id}
          >
            <img className="h-[300px] rounded-lg" src={item.image} alt="" />
            <p className="mt-4 text-lg px-4 truncate">{item.title}</p>
            <p className="text-lg mt-2 text-[#F59187] px-4">
              Rs.<b>{item.price}</b>
            </p>
            <p className="text-sm mx-4 mt-2 mb-4 line-clamp-3 overflow-ellipsis">
              {item.description}
            </p>
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
