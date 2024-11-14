import { Front_Img, FRONT_CIRCLE } from "../importFiles";
import watch from "../assets/product.png";
import { useState } from "react";
import { useEffect } from "react";

const FrontPage = () => {
  const [rotation, setRotation] = useState(-90);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - 90);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className={` bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full h-[90vh]
            flex justify-between`}
      >
        <div className="section-1  w-[40%] ">
          <div className="relative  h-[80vh]">
            <div className="absolute top-0 left-0 h-full ">
              <img src={Front_Img} className="w-full h-full  " alt="" />
            </div>

            <div className="relative  bottom-14 ps-10  z-10 flex justify-start items-end h-full space-x-2">
              {FRONT_CIRCLE?.map((data) => (
                <div className="w-20 h-24 ">
                  <img src={data?.img} className="w-full h-full " alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[60%] flex items-end justify-end  overflow-hidden bg-black">
          <div
            className={`relative w-[60vw] h-[60vw]  bg-red-200 rounded-full transition-transform duration-500`}
            style={{
              transform: `rotate(${rotation}deg)`,
              top: "92vh",
              right: "-12vw",
            }}
          >
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="absolute w-[10vw] top-[-150px] 2xl:top-[-250px] animate-topBottom">
                <img src={watch} alt=""  />
              </div>
              <div className="absolute w-[10vw] bottom-[-150px] 2xl:bottom-[-250px] animate-topBottom">
                <img src={watch} alt="" className="rotate-180" />
              </div>
              <div className="absolute w-[10vw] left-[-150px] 2xl:left-[-250px] animate-leftRight">
                <img src={watch} alt="" className="rotate-[-90deg]" />
              </div>
              <div className="absolute w-[10vw] right-[-150px] 2xl:right-[-250px] animate-leftRight">
                <img src={watch} alt="" className="rotate-[90deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FrontPage;
