import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="h-fit w-full relative">
      <div className="grid px-8 sm:px-28 lg:px-36 pb-36 gap-5 lg:gap-10">
        <h1
          className="font-nunito font-bold text-darkbrown text-center"
          style={{
            fontSize: "clamp(1.25rem, 1.1107rem + 0.6369vw, 1.875rem)",
          }}
        >
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:px-14 lg:px-0 2xl:px-36 lg:grid-cols-2 gap-5">
          <div className="grid col-span-1 gap-5 content-center">
            <h1
              className="font-nunito font-extrabold leading-10 text-center lg:text-left"
              style={{
                fontSize: "clamp(1.5rem, 1.3328rem + 0.7643vw, 2.25rem)",
              }}
            >
              Want to send a message?
              <br />
              Just fill the form or contact me on my email or mobile number!
            </h1>
            <div className="grid gap-5 w-fit justify-items-center justify-self-center lg:justify-self-start lg:justify-items-start">
              <a
                href="mailto:paano14325@gmail.com"
                className="flex font-nunito font-bold text-lg text-darkbrown w-fit"
                style={{
                  fontSize: "clamp(1.125rem, 1.0971rem + 0.1274vw, 1.25rem)",
                }}
              >
                <IoMailSharp
                  className="fill-darkbrown size-7 mr-2 self-center"
                  style={{
                    height: "clamp(1.5rem, 1.4443rem + 0.2548vw, 1.75rem)",
                  }}
                />
                paano14325@gmail.com
              </a>
              <a
                href=""
                className="flex font-nunito font-bold text-xl text-darkbrown"
                style={{
                  fontSize: "clamp(1.125rem, 1.0971rem + 0.1274vw, 1.25rem)",
                }}
              >
                <BsFillTelephoneFill
                  className="fill-darkbrown size-6 mr-2 self-center"
                  style={{
                    height: "clamp(1.5rem, 1.4443rem + 0.2548vw, 1.75rem)",
                  }}
                />
                +639397304644
              </a>
            </div>
          </div>
          <div className="grid col-span-1">
            <div className="bg-[#f6ede3] rounded-xl grid grid-cols-2 p-5">
              <h1 className="grid col-span-2 font-nunito font-bold text-lg">
                Name/Organization:
              </h1>
              <input
                type="text"
                className="grid col-span-1 text-lg font-nunito h-10 rounded-full p-3 focus:outline-darkbrown"
              ></input>
              <h1 className="grid col-span-2 font-nunito font-bold text-lg mt-5">
                Message:
              </h1>
              <textarea
                type="text"
                className=" grid col-span-2 text-lg font-nunito h-40 rounded-xl p-3 focus:outline-darkbrown"
              ></textarea>
              <button className="grid col-span-2 font-nunito font-extrabold text-md bg-white px-4 py-3 mt-5 w-1/2 justify-self-center text-black rounded-full border-2 border-transparent hover:border-2 hover:border-darkbrown hover:bg-darkbrown hover:text-white">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
