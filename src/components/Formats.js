import React from "react";

const Formats = () => {
  return (
    <div className="bg-[#F2F2F2] py-5 mt-5">
      <p class="or-divider my-3">
        <span className="span">VERSATILE AD FORMATS</span>
      </p>
      <div className="flex justify-around mt-5 text-center">
        <h4 className="w-52 h-10 rounded-2xl bg-[#FF6F00] shadow">POP UNDER</h4>
        <h4 className="w-52 h-10 rounded-2xl bg-[#f2f2f2] shadow">BANNER AD</h4>
        <h4 className="w-52 h-10 rounded-2xl bg-[#F2F2F2] shadow">NATIVE</h4>
        <h4 className="w-52 h-10 rounded-2xl bg-[#F2F2F2] shadow">SKIM</h4>
      </div>
      <div className="mt-6 flex justify-between px-5 w-full h-60">
        <div className="imgSide w-3/4 bg-blue-300">(Image will be changed)</div>
        <div className="ml-7">
          <h4 className="text-[#FF6F00]">POP UNDER</h4>
          <h5>
            This is one of the most popular ads. After user’s click, this ad
            opens landing page in behind. So, the user experience is not
            hampered much.
           
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Formats;
