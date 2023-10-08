import React from "react";
import phone from "../../assets/images/image 24.png";
import qr from "../../assets/images/qr.png";

const Download = () => {
  return (
    <div className="w-[1080px] rounded-[30px] bg-white shadow-custom">
      <div className="px-[93px] py-[46px] flex justify-between">
        <img src={phone} alt="" className="h-[38.5625rem]"/>
        <div className="text-[35px]">
          <img src={qr} alt="" />
          <h4 className="font-bold">Download the application</h4>
          <span className="font-semibold text-[#1BBD32]">BioSpectra</span>
        </div>
      </div>
    </div>
  );
};

export default Download;
