import imgs from "../assets/M22.png";
const Samsung = () => {
  const Samsung = [
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center p-10  dark:bg-[#162544]">
      {Samsung?.map((data, index) => (
        <div
          key={index}
          className="bg-[#fff1dc] dark:bg-[#233a66] rounded-lg p-4 overflow-hidden shadow-md"
        >
          <div className="flex items-center">
            <div className="w-full">
              <img src={imgs} className="w-36 h-44" alt={data.name} />
            </div>
            <div className="ml-2">
              {data.color.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full mb-2 cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex justify-between py-2">
            <h3 className="font-bold dark:text-[#fff1dc]">{data.name}</h3>
            <p className="dark:text-[#fff1dc]">{data.sold}*</p>
          </div>
          <div className="flex justify-between relative">
            <h3 className="font-bold dark:text-[#fff1dc]">Rs: {data.price}</h3>
            <button
              className="absolute -right-[20px]  dark:bg-[#fff1dc] text-[#ff6e80] top-[3px] py-2 px-8"
              style={{
                borderRadius: "5px",
                
                boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Samsung;
