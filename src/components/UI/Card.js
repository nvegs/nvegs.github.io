import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="container sm:container mx-auto border-2 border-slate-800">
        {props.children}
      </div>
    </>
  );
};

export default Card;
