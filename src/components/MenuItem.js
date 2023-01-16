import React from "react";

function MenuItem({ image, name, pachet, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <h4>{pachet}</h4>
      <p> {price} </p>
    </div>
  );
}

export default MenuItem;
