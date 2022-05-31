import React from "react";
import OwlCarousel from "react-owl-carousel2";
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

const Slide = () => {

  const options = {
    items: 2,
    nav: true,
    rewind: true,   
    mouseDrag: true,
    dots: true,
    touchDrag: true,
  };

  return (
    <div className="bg-[#F2F2F2] pl-10 py-3 my-5">
      <h3 className="text-[#644F9C] text-center">Title 1</h3>
      <OwlCarousel options={options}>
        
      <div className="header shadow">
        <div className="artwork w-4/12 h-44 bg-gray-200 text-center">
          Artwork for title 1
        </div>
        <div className="w-56 text-[#644F9C]">
          <h3>Title</h3>
          <h5>Here will be a text</h5>
        </div>
   
      </div>
      <div className="header shadow">
        <div className="artwork w-4/12 h-44 bg-gray-200 text-center">
          Artwork for title 1
        </div>
        <div className="w-56 text-[#644F9C]">
          <h3>Title</h3>
          <h5>Here will be a text</h5>
        </div>
      </div>
      <div className="header shadow">
        <div className="artwork w-4/12 h-44 bg-gray-200 text-center">
          Artwork for title 1
        </div>
        <div className="w-56 text-[#644F9C]">
          <h3>Title</h3>
          <h5>Here will be a text</h5>
        </div>
      </div>
      <div className="header shadow">
        <div className="artwork w-4/12 h-44 bg-gray-200 text-center">
          Artwork for title 1
        </div>
        <div className="w-56 text-[#644F9C]">
          <h3>Title</h3>
          <h5>Here will be a text</h5>
        </div>
      </div>
      <div className="header shadow">
        <div className="artwork w-4/12 h-44 bg-gray-200 text-center">
          Artwork for title 1
        </div>
        <div className="w-56 text-[#644F9C]">
          <h3>Title</h3>
          <h5>Here will be a text</h5>
        </div>
      </div>
      
      
      </OwlCarousel>
    </div>
  );
};

export default Slide;
