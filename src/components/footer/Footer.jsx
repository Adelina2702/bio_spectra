import React from "react";
import logo from "../../assets/icons/arcticons_biota.svg";
import instagramLogo from "../../assets/icons/Vector (5).svg";
import telegramLogo from "../../assets/icons/Vector (6).svg";

const Footer = () => {
  return (
    <div
      id="contacts"
      className="bg-black flex justify-between px-[6.25rem] pt-20 pb-36"
    >
      <div className="flex gap-14">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white flex flex-col gap-6">
          <a href="about-us" className="hover:text-blue-400">
            About us
          </a>
          <a href="events" className="hover:text-blue-400">
            Events
          </a>
          <a href="map" className="hover:text-blue-400">
            Map
          </a>
        </div>
      </div>
      <div className="text-white">
        <p className="pb-5">Contacts</p>
        <p>Email: biospectra@gmail.com</p>
        <p className="pb-5 pt-5">Phone: +996703350917</p>
        <div>
          <div className="flex items-center gap-2 pb-5">
            <img src={instagramLogo} alt="" className="w-6 h-6" />
            <a href="https://www.instagram.com/">biospectra</a>
          </div>
          <div className="flex items-center gap-2">
            <img src={telegramLogo} alt="" className="w-6 h-6" />
            <a href="https://web.telegram.org/a/#777000">@biospectra</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <p className="text-base font-semibold hover:text-blue-400">
          Subscribe to our newsletter
        </p>
        <div className="flex flex-col gap-5 pt-10 pb-5">
          <input
            type="text"
            name=""
            id=""
            className="w-[22rem] h-14 bg-black border border-white outline-none rounded-lg pl-2 placeholder:text-white"
            placeholder="Name"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-[22rem] h-14 bg-black border border-white outline-none rounded-lg pl-2 placeholder:text-white"
            placeholder="Email"
          />
        </div>
        <div>
          <button className="py-2 px-4 bg-[#1DB688] rounded-full font-medium">
            What we do
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
