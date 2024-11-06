// src/components/Brand.js
import { BRAND_DATA } from "../importFiles";

function Brand() {
  return (
    <div className="flex justify-center">
      {BRAND_DATA.map((item, index) => (
        <div key={index} className="flex flex-col items-center px-3">
          <img src={item.icon} alt="" 
          className="w-20 h-20"/>
          <h3>{item.tag}</h3>
        </div>
      ))}
    </div>
  );
}

export default Brand;
