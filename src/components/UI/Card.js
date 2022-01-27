import React from "react";

const Card = (props) => {
  return (
    <>
      <div class="container mx-auto px-4 bg-purple-100">{props.children}</div>
    </>
  );
};

export default Card;
