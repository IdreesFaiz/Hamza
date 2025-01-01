import { Front_Img, FRONT_CIRCLE, Front_Rotate } from "../importFiles";
import watch from "../assets/product.png";
import { useState } from "react";
import { useEffect } from "react";
import Samsung from "./samsung";

const FrontPage = () => {
 
  return (
    <>
      <div
        className={` bg-[#82B2F0] text-black dark:bg-[#162544] dark:text-white w-full h-[100vh]
            flex justify-between`}
      >
        <SectionImg/>
        <SectionRotate/>
      </div>
      <Samsung/>
    </>
  );
};
export default FrontPage;



function SectionImg(){
 return (
   <div className="section-1 w-full sm:w-[60%] md:w-[50%] lg:w-[40%]">
     <div className="relative h-[70vh] sm:h-[80vh] md:h-[92vh]">
       <div className="absolute top-0 left-0 w-full h-full">
         <img
           src={Front_Img}
           className="w-full h-full object-cover"
           alt="Background"
         />
       </div>

       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center  px-4">
         <div className="mt-14">
           <h1 className="text-[50px] font-sans font-semibold text-white">
             Market Mind
           </h1>
           <h4 className="text-white text-wrap max-w-[400px] word-break break-words pb-4">
             Discover the latest mobiles, crafted to complement your lifestyle.
             Enjoy cutting-edge technology, sleek designs, and powerful features
             — all tailored just for you. Shop now and pay later with flexible
             payment options!
           </h4>
         </div>

         {/* Circle Images */}
         <div className="flex">
           {FRONT_CIRCLE?.map((data, index) => (
             <div key={index} className="w-28 h-28  ">
               <img
                 src={data?.img}
                 className="w-full h-full object-contain"
                 alt={`Circle ${index + 1}`}
               />
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
 );

}


function SectionRotate(){
   const [rotation, setRotation] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setRotation((prev) => prev - 90);
     }, 3000);

     return () => clearInterval(interval);
   }, []);
  return (
    <div className="w-[60%] flex items-end justify-end  overflow-hidden ">
      <div className="relative">
        <div
          className={`absolute  w-[60vw] h-[60vw]  bg-[#5784C5] dark:bg-[#233a66] rounded-full transition-transform duration-500`}
          style={{
            transform: `rotate(${rotation}deg)`,
            bottom: "-92vh",
            right: "-12vw",
          }}
        >
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="absolute w-[35vw] top-[-250px] 2xl:top-[-250px] animate-topBottom">
              <img src={Front_Rotate[0]?.M_1} alt="" />
            </div>
            <div className="absolute w-[35vw]  bottom-[-250px] 2xl:bottom-[-250px] animate-topBottom">
              <img src={Front_Rotate[1]?.M_2} alt="" className="rotate-180" />
            </div>
            <div className="absolute w-[35vw] left-[-250px] 2xl:left-[-250px] animate-leftRight">
              <img
                src={Front_Rotate[2]?.M_3}
                alt=""
                className="rotate-[-90deg]"
              />
            </div>
            <div className="absolute w-[35vw] right-[-250px] 2xl:right-[-250px] animate-leftRight">
              <img
                src={Front_Rotate[3]?.M_4}
                alt=""
                className="rotate-[90deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}