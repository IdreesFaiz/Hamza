import BoxDesign from "../globle/boxDesign";
import imgs from "../assets/M22.png";

const Latest = () => {
  const Products = [
    {
      id: 1,
      pic: imgs,
      color: ["blue", "purple", "red", "green"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
    {
      id: 1,
      pic: imgs,
      color: ["red", "green", "blue", "purple"],
      price: 23000,
      sold: 345,
      name: "Samsung",
      buyProduct: "Buy",
    },
  ];
  return <BoxDesign  Products={Products} />;
};

export default Latest;
