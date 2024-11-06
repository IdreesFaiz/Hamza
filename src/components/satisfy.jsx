// src/components/Satisfy.js
import { SATISFY_DATA } from "../importFiles";

function Satisfy() {
  return (
    <div className="flex justify-center">
      {SATISFY_DATA.map((item, index) => (
        <div key={index} className="flex flex-col items-center px-3">
          <img src={item.icon} alt="" className="w-16 h-16 "/>
          <h3>{item.heading}</h3>
          <p>{item.para}</p>
        </div>
      ))}
    </div>
  );
}

export default Satisfy;
