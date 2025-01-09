import { useEffect } from "react";
import watch from "../assets/product.png";
import Samsung from "./samsung";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../globle/Button";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// const FrontPage = () => {
//   return (
//     <>
//       <div
//         className={` w-full h-screen  flex justify-end flex-col items-center `}
//       >
//         <h1 className="text-[40px] font-bold">
//           Your perfect phone is just click away.
//         </h1>
//         <p className="text-center">
//           Explore top-tier features, innovative designs, and performance that
//           fits your lifestyle. Elevate your experience with cutting-edge
//           technology and exceptional craftsmanship
//         </p>
//         <Animation />
//       </div>

//     </>
//   );
// };

function FrontPage() {
  useEffect(() => {
    gsap.fromTo(
      ".animate-item",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 2,
      }
    );
    gsap.to(".scroll-element", {
      width: "148px",
      height: "178px",
      x: "-380px",
      y: "20px",

      duration: 1,
      delay: 2.5,
    });

    gsap.to(".scroll-element1", {
      width: "148px",
      height: "178px",
      x: "380px",
      y: "20px",
      duration: 1,
      delay: 2.5,
    });

    gsap.to(".scroll-element2", {
      width: "148px",
      height: "178px",
      x: "260px",
      y: "-10px",
      duration: 1,
      delay: 2.5,
    });

    gsap.to(".scroll-element3", {
      width: "148px",
      height: "178px",
      x: "-260px",
      y: "-10px",
      duration: 1,
      delay: 2.5,
    });
    gsap.to(".scroll-element6", {
      width: "148px",
      height: "178px",
      x: "-0%",
      y: "-45px",
      duration: 1,
      delay: 2.5,
    });
    gsap.to(".scroll-element4", {
      width: "148px",
      height: "178px",
      x: "130px",
      y: "-35px",
      duration: 1,
      delay: 2.5,
    });

    gsap.to(".scroll-element5", {
      width: "148px",
      height: "178px",
      x: "-130px",
      y: "-35px",
      duration: 1,
      delay: 2.5,
    });
  }, []);

  return (
    <div className="text-black dark:bg-[#162544] dark:text-white h-screen flex flex-col justify-center items-center relative">
      <div className="animate-item w-full h-full flex justify-center items-center">
        <div className="absolute w-28 h-36 rounded-md py-3 rotate-[10deg] bg-blue-600 scroll-element1">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute w-28 h-36 rounded-md py-3 rotate-[7deg] bg-red-600 scroll-element2">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute w-28 h-36 rounded-md py-3 rotate-[5deg] bg-green-600 scroll-element4">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute w-28 h-36 rounded-md py-3 bg-pink-600 scroll-element6">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute w-28 h-36 rounded-md py-3 -rotate-[5deg] bg-green-600 scroll-element5">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute w-28 h-36 rounded-md py-3 -rotate-[7deg] bg-red-600 scroll-element3">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute w-28 h-36 rounded-md py-3 -rotate-[10deg] bg-blue-600 scroll-element">
          <img
            src={watch}
            className="w-full h-full object-contain"
            alt="Watch"
          />
        </div>
      </div>
      <div className="absolute bottom-9 flex flex-col justify-center  items-center">
        <h1 className="text-[30px] font-bold"> Your perfect phone is just a click away.</h1>
        <Button text="Shop now" />
      </div>
    </div>
  );
}

export default FrontPage;
