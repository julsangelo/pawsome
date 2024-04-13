import React from "react";
import Background from "../assets/hero-bg.png";
import Video from "../assets/hero-vid.gif";

function Hero() {
  return (
    <div className="h-fit w-fit relative">
      <div className="h-full flex z-10">
        <img
          src={Background}
          alt=""
          className="absolute right-0 max-w-[650px] w-auto h-full"
        />
        <div className="grid grid-cols-1 content-center px-8 lg:px-36 pt-[8rem] py-[5rem] gap-x-4 gap-y-3 relative lg:grid-cols-2 max-lg:flex max-lg:flex-col-reverse">
          <div className="grid col-span-1 content-center">
            <div className="flex gap-y-2 lg:gap-y-4 flex-wrap justify-center lg:justify-start">
              <h1
                className="font-extrabold font-nunito text-black"
                style={{
                  fontSize: "clamp(1.5rem, 0.8312rem + 3.0573vw, 4.5rem)",
                }}
              >
                Save a life.
              </h1>
              <h1
                className="font-semibold font-nunito text-lg text-black text-center lg:text-left"
                style={{
                  fontSize: "clamp(1.125rem, 1.0414rem + 0.3822vw, 1.5rem)",
                }}
              >
                Adopt a rescued pets from our partner rescue shelters or donate
                for their neccessities. Give chance for animals to live their
                best life.
              </h1>
            </div>
          </div>
          <div className="grid col-span-1">
            <img
              autostart
              autoplay
              src={Video}
              alt=""
              className="flex justify-self-center lg:justify-self-end align-center w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
