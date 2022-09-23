import React, { useState } from "react";   
import Amazon from "./components/Amazon";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import swal from 'sweetalert';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    // alert ("item is added to cart ")  
    swal( "The item is added to cart!");


  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
};

export default App;


