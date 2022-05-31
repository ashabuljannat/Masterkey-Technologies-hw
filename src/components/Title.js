import React from "react";

const Title = () => {
  const circle = {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="title bg-[#644f9c] mt-5 p-3">
      <h3 className="text-center text-white font-normal mb-5">Title 1</h3>
      <div className="text flex justify-around">
        <div
          className="circle border-2 border-dashed border-white text-white"
          style={circle}
        >
          <h1>1 BN+</h1>
          <h3>Daily Impressions</h3>
        </div>
        <div className="circle bg-white text-[#644f9c]" style={circle}>
          <h1>$500K+</h1>
          <h3>Paid</h3>
        </div>
        <div className="circle bg-[#FF6F00] text-white" style={circle}>
          <h1>8K+</h1>
          <h3>Global Publishers</h3>
        </div>
      </div>
    </div>
  );
};

export default Title;
