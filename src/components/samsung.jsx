import imgs from "../assets/M22.png";
import ims from "../assets/M4.png";
import BoxDesign from "../globle/boxDesign";
import LatestGrid from "../globle/LatestGrid";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSamsung = async () =>{
  const response = await axios.get("http://localhost:5000/api/products");
  console.log(response.data)
  return response.data;
}


const Samsung = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchSamsung,
  });
 

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>An error occurred: {error.message}</div>;
 
  return (
    <div>
      <div className="flex justify-between">
        <h1>Samsung</h1>
        <button>View all</button>
      </div>
      <LatestGrid Products={data} />
      
    </div>
  );
};
export default Samsung;
