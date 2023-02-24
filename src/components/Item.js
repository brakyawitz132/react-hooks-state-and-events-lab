import React, { useState } from "react";

function Item({ name, category }) {
  const [status,setStatus] = useState("")

  function handleStatus() {
    status==="" ? setStatus("in-cart") : setStatus("")
  }
  return (
    <li className={status}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {status==="" ? 
      <button className="add" onClick={handleStatus}>Add to Cart</button> : 
      <button className="remove" onClick={handleStatus}>Remove from Cart</button>}
    </li>
  );
}

export default Item;
