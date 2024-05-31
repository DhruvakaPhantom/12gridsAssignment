import React from "react";

const Map = () => {
  return (
    <div className="map-container relative flex justify-center lg:items-center lg:justify-start">
      <div className="box h-72 w-72 border bg-gradient-to-r from-[#103977] to-[#171352] rounded-xl absolute mt-10 flex justify-center items-center md:h-96 md:w-96  lg:ml-36 lg:h-[315px] lg:w-[486px] lg:flex lg:justify-start lg:pl-16">
        <div className="text text-white font-[montserrat]  w-60 h-52 flex flex-col justify-evenly md:w-72 md:h-80 lg:justify-center lg:space-y-6">
          <h3 className="text-2xl font-semibold md:text-3xl">OnestopNDT</h3>
          <p className="text-sm md:text-base lg:w-96">
            PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi
            Mumbai - 400701.
          </p>
          <p className="text-sm md:text-base">Landline - 022 4131 0099</p>
          <a
            href="https://maps.app.goo.gl/w89s6FSAxhVTSTKX7"
            target="_blank"
            className="flex items-center text-sm gap-4  w-fit md:text-base md:font-medium"
          >
            <img
              src="src/assets/gmap.png"
              alt=""
              className="h-9 w-9 p-2 bg-white rounded-xl md:h-12 md:w-12 "
            />
            Google Map Link
          </a>
        </div>
      </div>
      <img src="/src/assets/map.png" alt="map" className="w-screen lg:hidden" />
      <img src="/src/assets/landscapemap.png" alt="map" className="w-screen" />
    </div>
  );
};

export default Map;
