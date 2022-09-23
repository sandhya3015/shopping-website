import React from "react";

const Card = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
       <div className="details">
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
      
    </div>
  );
};
export default Card;