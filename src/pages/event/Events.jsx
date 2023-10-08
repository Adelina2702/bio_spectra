import React from "react";
import Header from "../../components/header/Header";
import eventImage from "../../assets/images/5b41771975d4b740c29344f12749c9dd.jpg";
import image from "../../assets/images/srobnv.jpg";

const Events = () => {
  return (
    <>
      <Header />
      <div className="px-[6.25rem] pt-16 ">
        <div className=" ">
          <h1 className="text-center text-5xl  font-semibold pb-8 text-[#1DB688] ">
            Trainings BioSpectr
          </h1>
          <p className="text-[1.25rem] font-normal text-center pb-16">
            Our biodiversity project is the key to discovering the potential and
            amazing world that hides in the nature of South Africa. We strive to
            inspire people, share knowledge and create a place where
            biodiversity is a source of inspiration and respect. Let's make this
            world richer, brighter and more sustainable together.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={eventImage}
            alt=""
            className="rounded-[1.875rem] h-[31.25rem]"
          />
        </div>
        <h1 className="text-center text-[2.5rem] pt-24 pb-7 font-semibold">
          Upcoming trainings
        </h1>
        <div className="flex items-center justify-between pb-24">
          <div>
            <h2 className="text-2xl font-semibold">
              Unique Ecosystems in South Africa
            </h2>
            <div className="flex gap-4 font-medium pb-1">
              <p>Date: 21 october 2023</p>
              <p>Time: 18:00</p>
            </div>
            <p className="font-medium pb-2">Location : Cauteng</p>
            <p className="w-[35rem] text-lg">
              South Africa is renowned for its diverse and unique ecosystems,
              which make it a truly remarkable destination for biodiversity
              enthusiasts and conservationists. The country's varied natural
              environments, climates, and geographical features contribute to
              its exceptional range of ecosystems. Here are some of the unique
              ecosystems found in South Africa:
            </p>
          </div>
          <div>
            <img src={image} alt="" className="w-[40rem]" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Events;
