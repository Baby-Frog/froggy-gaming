import React from "react";

const SlickItem = ({ image }) => {
  return (
    <div class="image-item">
      <div class="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SlickItem;
