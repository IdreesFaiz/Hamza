const Color = ({ Color, direction = "row" }) => {
  console.log(Color);
  return (
    <div
      className={`ml-2 flex ${direction === "row" ? "flex-row" : "flex-col"}`}
    >
      {Color?.map((color, index) => (
        <div
          key={index}
          className="w-4 h-4 rounded-full m-1 cursor-pointer"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default Color;
