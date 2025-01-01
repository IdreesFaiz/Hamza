import imgs from "../assets/M22.png";
import Color from "./Color";
import MiniMobileBox from "./miniMobileBox";

const LatestGrid = ({ Products = [] }) => {
  console.log(Products,"product data ");
  if (!Array.isArray(Products) || Products.length === 0) {
    console.warn("Products undefined ya khaali hai");
    return <div>No products available</div>;
  }
  

  return (
    <>
      <div className="grid grid-cols-[40%_60%] gap-4 py-4 px-14">
        <div className="bg-red-200  py-6 px-8 flex justify-around items-center">
          <div className="w-64  ">
            <img
              src={data[0]?.pic}
              className="object-contain w-full h-full"
              alt=""
            />
          </div>
          <button>{data.buyProduct}</button>
          <MiniMobileBox direction="col" />
          <Color Color={Products[0]?.color} direction="col" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Products.slice(1, 5).map((data) => (
            <div className="bg-red-300 rounded-md flex justify-center items-center">
              <div className="w-28">
                <img
                  src={data?.pic}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div>
                <MiniMobileBox direction="row" />
                <Color Color={data?.color} direction="row" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestGrid;
