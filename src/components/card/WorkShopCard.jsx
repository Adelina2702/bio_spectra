import React from "react";
import { workShopData } from "../../constants/workshopData";

const WorkShopCard = () => {
  return (
      <div className="flex gap-6 ">
        {workShopData.map((item) => (
          <div className="bg-white  w-[18.25rem] rounded-xl">
            <div>
              <img src={item.images} alt="" className="rounded-xl"/>
            </div>
            <div className="px-6 py-6">
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <div className="flex gap-2 items-center text-base py-4">
                <img src={item.calendar} alt="calendar" />
                <p>{item.date}</p>
              </div>
              <div className="flex gap-2 items-center text-base pb-9">
                <img src={item.map} alt="map" />
                <p>{item.geo}</p>
              </div>
              <button className="py-2 px-16 bg-[#1DB688] text-white rounded-lg">
                Readmore
              </button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default WorkShopCard;
