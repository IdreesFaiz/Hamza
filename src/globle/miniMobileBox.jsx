
import imgs from "../assets/M22.png";


const MiniMobileBox =({direction = "row"})=>{
    return (
      <div className={`flex ${direction === "row" ? 'flex-row' : 'flex-col'}`}>
        <div className="w-8 h-8 border-2 border-cyan-300 rounded-sm flex justify-center items-center py-[3px] m-1 ">
          <img src={imgs} className="w-full  h-full object-contain" alt="" />
        </div>
        <div className="w-8 h-8 border-2 border-cyan-300 rounded-sm flex justify-center items-center py-[3px] m-1 ">
          <img src={imgs} className="w-full  h-full object-contain" alt="" />
        </div>
        <div className="w-8 h-8 border-2 border-cyan-300 rounded-sm flex justify-center items-center py-[3px] m-1 ">
          <img src={imgs} className="w-full  h-full object-contain" alt="" />
        </div>
        <div className="w-8 h-8 border-2 border-cyan-300 rounded-sm flex justify-center items-center py-[3px] m-1 ">
          <img src={imgs} className="w-full  h-full object-contain" alt="" />
        </div>
      </div>
    );
}

export default MiniMobileBox;