import React from "react";

const Header = () => {
  return (
    <>
      <div className="header flex justify-around bg-[#F2F2F2] p-3 my-5">
        <div className="w-2/5 text-[#644F9C]">
          <h3>Here will be a Title</h3>
          <h5>Here will be a text</h5>
        </div>
        <div className="artwork w-4/12 h-60 bg-white text-center">
          Artwork for title 1
        </div>
      </div>
    </>
  );
};

export default Header;
