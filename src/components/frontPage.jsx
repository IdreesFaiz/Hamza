import { useEffect } from "react";
import watch from "../assets/product.png";
import Samsung from "./samsung";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const FrontPage = () => {
  return (
    <>
      <div
        className={`  text-black dark:bg-[#162544] dark:text-white w-full h-screen flex justify-center `}
      >
        <Animation />
      </div>
      <Samsung />
    </>
  );
};

export default FrontPage;

function Animation() {
  useEffect(() => {
    gsap.fromTo(
      ".animate-item",
      {
        y: "30%",
      },
      {
        y: "-30%",
        duration: 1.5,
        ease: "power2.out",
      }
    );
    gsap.to(".scroll-element", {
      width: "148px",
      height: "178px",
      x: "-380px",
      y: "20px",
      marginTop: "80px",
      duration: 1,
        delay: 1.5,
    });

    gsap.to(".scroll-element1", {
      width: "148px",
      height: "178px",
      x: "380px",
      y: "20px",
      duration: 1,
      delay: 1.5,
    });

    gsap.to(".scroll-element2", {
      width: "148px",
      height: "178px",
      x: "260px",
      y: "-10px",
      duration: 1,
      delay: 1.5,
    });

    gsap.to(".scroll-element3", {
      width: "148px",
      height: "178px",
      x: "-260px",
      y: "-10px",
      duration: 1,
      delay: 1.5,
    });
    gsap.to(".scroll-element6", {
      width: "148px",
      height: "178px",
      x: "0px",
      y: "-45px",
      duration: 1,
      delay: 1.5,
    });
    gsap.to(".scroll-element4", {
      width: "148px",
      height: "178px",
      x: "130px",
      y: "-35px",
      duration: 1,
      delay: 1.5,
    });

    gsap.to(".scroll-element5", {
      width: "148px",
      height: "178px",
      x: "-130px",
      y: "-35px",
      duration: 1,
      delay: 1.5,
    });

  }, []);

  return (
    <div className="relative   w-full h-screen flex justify-center items-end animate-item">
      <div className="absolute w-28 h-36  rounded-md py-3  rotate-[10deg] bg-blue-600 scroll-element1">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36  rounded-md py-3  rotate-[7deg] bg-red-600 scroll-element2">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36  rounded-md py-3  rotate-[5deg] bg-green-600 scroll-element4">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36  rounded-md py-3 bg-pink-600 scroll-element6">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36   rounded-md py-3  -rotate-[5deg] bg-green-600 scroll-element5">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36   rounded-md py-3  -rotate-[7deg] bg-red-600 scroll-element3">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36   rounded-md py-3 -rotate-[10deg] bg-blue-600 scroll-element">
        <img src={watch} className="w-full h-full object-contain" alt="Watch" />
      </div>
    </div>
  );
}
