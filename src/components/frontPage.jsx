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
        className={`pb-56 bg-[#82B2F0] text-black dark:bg-[#162544] dark:text-white w-full h-[140vh] flex justify-center items-end `}
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
    gsap.to(".card-1", {
      width: "168px",
      height: "188",
      x: "-380px",
      y: "20px",
      marginTop: "80px",
      scrollTrigger: {
        trigger: ".card-1",
        start: "60% 80%",
        end: "40% 65%",
        scrub: true,
      
        // markers: true,
      },
    });
 

    ///////////////////////////
    gsap.to(".card2", {
      width: "168px",
      height: "188",
      x: "380px",
      y: "20px",
      scrollTrigger: {
        trigger: ".card2",
        start: "60% 80%",
        end: "40% 65%",
        scrub: true,
      
        // markers: true,
      },
    });
      
  }, []);


  return (
    <>
      <div className="absolute w-28 h-36 m-1 -rotate-[5deg] rounded-md py-3 bg-blue-600 card-1 card-overflow1">
        <img src={watch} className="w-full h-full object-contain" alt="Watch" />
      </div>
      <div className="absolute w-28 h-36 rotate-[5deg] m-1 rounded-md py-3 bg-red-600 card2 ">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
        {/* <div className="absolute w-28 h-36 m-1 rotate-[10deg] rounded-md py-3 bg-blue-600 scroll-element1 scroll">
          <img src={watch} className="w-full h-full object-contain" alt="" />
        </div>
      
      <div className="absolute w-28 h-36 m-1 rotate-[5deg] rounded-md py-3 bg-yellow-600 scroll-element4">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36 m-1 -rotate-[2deg] rounded-md py-3 bg-red-600 scroll-element5">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="absolute w-28 h-36 m-1 -rotate-[5deg] rounded-md py-3 bg-green-600 scroll-element3">
        <img src={watch} className="w-full h-full object-contain" alt="" />
      </div> */}
    </>
  );
}




  // gsap.to(".scroll", {
  //   y: "350px",
  //   marginLeft: "590px",
  //   rotate: "0deg",
  //   marginTop: "80px",
  //   scrollTrigger: {
  //     trigger: ".scroll",
  //     start: "60% 60%",
  //     end: "40% 35%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // });
 
  // gsap.to(".scroll1", {
  //   y: "350px",
  //   marginLeft: "450px",
  //   rotate: "0deg",
  //   marginTop: "80px",
  //   scrollTrigger: {
  //     trigger: ".scroll1",
  //     start: "60% 60%",
  //     end: "40% 35%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // });

  // gsap.to(".scroll-element2", {
  //   width: "168px",
  //   height: "188",
  //   x: "230px",
  //   y: "-10px",

  //   scrollTrigger: {
  //     trigger: ".scroll-element2",
  //     start: "60% 80%",
  //     end: "40% 65%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // });
  // gsap.to(".scroll-element3", {
  //   width: "168px",
  //   height: "188",
  //   x: "-230px",
  //   y: "-10px",

  //   scrollTrigger: {
  //     trigger: ".scroll-element3",
  //     start: "60% 80%",
  //     end: "40% 65%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // });
  // gsap.to(".scroll-element4", {
  //   width: "168px",
  //   height: "188",
  //   x: "70px",
  //   y: "-35px",

  //   scrollTrigger: {
  //     trigger: ".scroll-element4",
  //     start: "60% 80%",
  //     end: "40% 65%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // });
  // gsap.to(".scroll-element5", {
  //   width: "168px",
  //   height: "188",
  //   x: "-70px",
  //   y: "-30px",
  //   scrollTrigger: {
  //     trigger: ".scroll-element5",
  //     start: "60% 80%",
  //     end: "40% 65%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // });