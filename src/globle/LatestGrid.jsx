import imgs from "../assets/M22.png";

const LatestGrid = () => {
  return (
    <div className="grid grid-cols-[40%_60%] gap-4 py-4 px-14">
      <div className="bg-red-200  py-6 px-8 flex justify-around items-center">
        <div className="w-64 bg-cyan-400">
          <img src={imgs} className="object-contain w-full h-full" alt="" />
        </div>
        <div>
          <div className="w-12 h-16 border-2 border-cyan-300 rounded-md flex justify-center items-center p-1 m-2 ">
            <img src={imgs} className="w-full  h-full object-contain"  alt="" />
          </div>
          <div className="w-12 h-16 border-2 border-cyan-300 rounded-md flex justify-center items-center p-1 m-2 ">
            <img src={imgs} className="w-full  h-full object-contain"  alt="" />
          </div> 
          <div className="w-12 h-16 border-2 border-cyan-300 rounded-md flex justify-center items-center p-1 m-2 ">
            <img src={imgs} className="w-full  h-full object-contain"  alt="" />
          </div>
          <div className="w-12 h-16 border-2 border-cyan-300 rounded-md flex justify-center items-center p-1 m-2 ">
            <img src={imgs} className="w-full  h-full object-contain"  alt="" />
          </div>
        </div>
      </div>
      <div className="bg-red-900 grid grid-cols-2 gap-2 ">
        <div className="bg-red-300">Item 2</div>
        <div className="bg-red-400">Item 3</div>
        <div className="bg-red-700">Item 4</div>
        <div className="bg-red-600">Item 5</div>
      </div>
    </div>
  );
};

export default LatestGrid;
