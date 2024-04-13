import React from "react";
import { IoPaw } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-fit bg-darkbrown px-10 md:px-40 lg:px-58 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full gap-y-5">
        <div className="grid col-span-1 lg:col-span-2 content-center">
          <div className="w-fit gap-3 items-center justify-center flex">
            <IoPaw className="fill-white size-14 rotate-12 justify-self-center w-full" />
            <p className="text-3xl text-white font-pacifico">Pawsome</p>
          </div>
        </div>
        <div className="grid col-span-1 lg:col-span-3">
          <div className="grid grid-cols-2">
            <div className="grid col-span-1">
              <ul className="items-center">
                <li>
                  <a
                    href=""
                    className="font-nunito font-semibold text-lg text-white hover:underline hover:underline-offset-4"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-nunito font-semibold text-lg text-white hover:underline hover:underline-offset-4"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-nunito font-semibold text-lg text-white hover:underline hover:underline-offset-4"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid col-span-1">
              <ul className="items-center">
                <li>
                  <a
                    href=""
                    className="font-nunito font-semibold text-lg text-white hover:underline hover:underline-offset-4"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-nunito font-semibold text-lg text-white hover:underline hover:underline-offset-4"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-nunito font-semibold text-lg text-white hover:underline hover:underline-offset-4"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid col-span-1 lg:col-span-5">
          <div className="border-t-2 border-[#f6ede3] text-center text-white font-nunito font-semibold text-md pt-5">
            © 2024 Pawsome, All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
