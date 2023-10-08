import React from "react";
import map from "../../assets/icons/map.svg";
import ColumnChart from "../../components/chart/ColumnChart";
import Header from "../../components/header/Header";
import DonutChart from "../../components/statistics/Statistic";
import Download from "../../components/download";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div>
        <div className="p-[100px] flex ">
          <div className="flex flex-col mr-[80px] mt-[120px]">
            <h2 className="text-[34px] font-semibold">BioSpectra</h2>
            <p className="text-[25px] font-medium w-[560px]">
              Focused on utilizing data spectroscopy and visualization for
              biodiversity analysis and monitoring in South Africa.
            </p>
          </div>
          <img src={map} alt="" />
        </div>
        <DonutChart />
        <div className="p-[100px]">
          <ColumnChart />
            </div>

            <div className='p-[100px] flex justify-center'>
            <Download/>
            </div>
        </div>
    </>
  );
};

export default AboutUs;
