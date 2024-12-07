// src/components/Satisfy.js
import { SATISFY_DATA } from "../importFiles";
 
function Satisfy() {
  return (
    <div className="flex justify-center   gap-6 p-10 bg-gray-50 dark:bg-[#162544]">
      {SATISFY_DATA.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white dark:bg-[#233a66] shadow-lg border border-gray-200 rounded-lg p-4 w-64 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={item.icon}
            alt=""
            className="w-16 h-16 mb-4 object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.heading}
          </h3>
          <p className="text-sm text-gray-600 text-center">{item.para}</p>
        </div>
      ))}
    </div>
  );
}

export default Satisfy;
