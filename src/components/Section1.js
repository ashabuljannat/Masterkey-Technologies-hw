import React from "react";

const Section1 = () => {
  return (
    <div className="bg-[#F2F2F2] pt-5">
      <p class="or-divider">
        <span className="span">AVAILABLE FOR EVERYONE</span>
      </p>
      <h4 className="text-center">Here will be a text</h4>
      <div className="mt-6">
        <div className="flex justify-around mt-10 text-center ">
          <div className=" h-80 grid content-around ">
            <div className="w-40 h-40 rounded-full circle text-center bg-white shadow-sm"></div>
            <h4>Text 1</h4>
            <h4 className="w-48 h-10 rounded-2xl bg-[#644F9C] shadow">Hello 1</h4>
          </div>
          <div className=" h-80 grid content-around">
            <div className="w-40 h-40 rounded-full circle text-center bg-white shadow-sm"></div>
            <h4>Text 2</h4>
            <h4 className="w-48 h-10 rounded-2xl bg-[#644F9C] shadow">Hello 2</h4>
          </div>
          <div className=" h-80 grid content-around">
            <div className="w-40 h-40 rounded-full circle text-center bg-white shadow-sm"></div>
            <h4>Text 3</h4>
            <h4 className="w-48 h-10 rounded-2xl bg-[#644F9C] shadow">Hello 3</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
