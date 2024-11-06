import Back from "../assets/img.jpg";
import watch from "../assets/product.png";

const FrontPage = () => {
  return (
    <>
      <div
        className={` bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full h-[90vh]
            flex justify-between`}
      >
        <div className="section-1  w-1/2 ">
          <div className="relative w-1/2 h-[80vh]">
            <div className="absolute top-0 left-0 w-[110%] h-full ">
              <img src={Back} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="relative  bottom-8  z-10 flex justify-center items-end h-full space-x-2">
              <div className="border rounded-full border-black w-16 h-16 flex justify-center items-center overflow-hidden">
                <img
                  src={watch}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="border rounded-full border-black w-16 h-16 flex justify-center items-center overflow-hidden">
                <img
                  src={watch}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>{" "}
              <div className="border rounded-full border-black w-16 h-16 flex justify-center items-center overflow-hidden">
                <img
                  src={watch}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>{" "}
              <div className="border rounded-full border-black w-16 h-16 flex justify-center items-center overflow-hidden">
                <img
                  src={watch}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-1 w-1/2  flex justify-end items-end">
          <div className="rotateCycle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          </div>
        </div>
      </div>
    </>
  );
};
export default FrontPage;
