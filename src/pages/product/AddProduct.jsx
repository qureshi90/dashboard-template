const AddProduct = () => {
  return (
    <div className="flex justify-center items-center mx-auto z-30 flex-grow">
      <div className="flex flex-col xl:w-[500px] bg-white p-4 rounded-lg shadow-lg fixed top-5">
        <label className="">Name</label>
        <input
          className="pl-2 border border-blue-600 outline-none w-full h-12 rounded-lg bg-white shadow-md"
          name="name"
        />
        <div className="flex justify-between">
          <div className="mt-5 mr-3">
            <label className="">Price</label>
            <br />
            <input
              className="pl-2 border border-blue-600 outline-none w-[225px] max-sm:w-full  h-12 rounded-lg bg-white shadow-md"
              type="number"
              name="price"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="category" className="">
              Category
            </label>
            <br />
            <select
              id="category"
              className="pl-2 cursor-pointer border border-blue-600 outline-none w-full sm:w-[225px] h-12  rounded-lg bg-white shadow-md"
            >
              Select
              <option value="">Select</option>
              <option className="" value="">
                Medium
              </option>
              <option value="">Small</option>
              <option value="">Large</option>
              <option value="">Jumbo</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-5 mr-3">
            <label className="">Quntity</label>
            <br />
            <input
              className="pl-2 border border-blue-600 outline-none w-full sm:w-[225px] h-12  rounded-lg bg-white shadow-md"
              type="number"
              name="Quntity"
            />
          </div>
          <div className="mt-5">
            <label className="">Image</label>
            <br />
            <input
              className="border border-blue-600 outline-none w-full sm:w-[225px] h-12 rounded-lg bg-white shadow-md"
              name="image"
              type="file"
            />
          </div>
        </div>
        <label className="mt-2">Description</label>
        <textarea
          className="m-0 pl-2 border border-blue-600 outline-none w-full h-36 rounded-lg bg-white shadow-md"
          name="description"
        />
        <button
          type="submit"
          className="w-full h-12 bg-[#694CFF] hover:bg-[#693CFF] text-lg text-white mt-8 mb-2 rounded-lg"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
