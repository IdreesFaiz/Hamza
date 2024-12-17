import imgs from "../assets/M22.png";
import ims from "../assets/M4.png";

// import BoxDesign from "../globle/boxDesign";
import LatestGrid from "../globle/LatestGrid";
const Apple = () => {
  const Products = [
    {
      id: 1,
      pic: imgs,
      color: ["red", "red", "red", "red"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
    {
      id: 2,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
    {
      id: 3,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
    {
      id: 4,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
    {
      id: 5,
      pic: ims,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h1>Apple</h1>
        <button>View all</button>
      </div>
      <LatestGrid Products={Products} />
    </div>
  );
};
export default Apple;
