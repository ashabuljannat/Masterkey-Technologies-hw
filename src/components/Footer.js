import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer flex justify-around mt-5 bg-[#F2F2F2] py-5">
      <div>
        <h4 className="text-normal text-[#644f9c] my-3">We are social</h4>
        <h5 className="text-normal">FOLLOW US</h5>
        <h4 className="text-white w-full  flex justify-around my-4">
          <span className="insta w-10 h-10 rounded-full text-center">
            <InstagramIcon />
          </span>
          <span className="bg-blue-700 w-10 h-10 rounded-full text-center">
            <FacebookRoundedIcon />
          </span>
          <span className="bg-red-600 w-10 h-10 rounded-full text-center">
            <YouTubeIcon />
          </span>
        </h4>
        <h3>LOGO</h3>
      </div>
      <div className="footerText">
        <h4 className="text-normal text-[#644f9c] my-3 ">Links</h4>
        <h5>ADVERTISERS</h5>
        <h5>PUBLISHERS</h5>
        <h5>INFLUENCER</h5>
        <h5>AD FORMATS</h5>
      </div>
      <div className="footerText">
        <h4 className="text-normal text-[#644f9c] my-3">Documentation</h4>
        <h5>TERMS & CONDITIONS</h5>
        <h5>PRIVACY POLICY</h5>
        <h5>CANCELLATION POLICY</h5>
        <h5>BLOG</h5>
      </div>
      <div className="text-normal footerText2">
        <h4 className="text-[#644f9c] my-3">Support</h4>
        <h5>FAQ</h5>
        <h5>MEDIA KIT</h5>
        <h5>CONTACT US</h5>
      </div>
    </div>
  );
};

export default Footer;
