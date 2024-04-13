import React, { useState } from "react";
import { IoPaw } from "react-icons/io5";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Animals", href: "#animals" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const LandingNav = () => {
  const [color, setColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={
          color
            ? "h-24 w-full flex flex-wrap justify-between px-8 lg:px-36 items-center fixed z-20 bg-white transition delay-300 ease-in-out drop-shadow-md"
            : "h-24 w-full flex flex-wrap justify-between px-8 lg:px-36 items-center fixed z-20 transition delay-300 ease-in-out bg-white lg:bg-transparent"
        }
      >
        <a href="#" className="flex items-center gap-3 h-full cursor-pointer">
          <IoPaw className="fill-darkbrown size-16 rotate-12" />
          <p className="text-4xl text-darkbrown font-pacifico">Pawsome</p>
        </a>
        <div className="hidden lg:flex items-center h-full">
          {navLinks.map((item) => (
            <a
              href={item.href}
              className={
                color
                  ? "font-nunito font-bold text-lg text-darkbrown self-center border-b-4 border-transparent cursor-pointer hover:border-b-4 hover:border-darkbrown py-3 px-6"
                  : "font-nunito font-bold text-lg self-center border-b-4 border-transparent cursor-pointer hover:border-b-4 hover:border-black py-3 px-6"
              }
            >
              {item.name}
              {""}
            </a>
          ))}
          <div className="ml-4 ">
            <button
              className={
                color
                  ? "font-nunito font-extrabold text-md bg-darkbrown px-4 py-3 ml-2 text-white rounded-full border-2 border-transparent hover:border-2 hover:border-darkbrown hover:bg-transparent hover:text-darkbrown"
                  : "font-nunito font-extrabold text-md bg-white px-4 py-3 ml-2 text-black rounded-full border-2 border-transparent hover:border-2 hover:border-white hover:bg-transparent hover:text-white"
              }
            >
              SAVE A FURIEND
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNav}>
            {isOpen ? <X /> : <Menu className="size-8 " />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center top-24 w-full z-30 bg-white drop-shadow-md sticky">
          {navLinks.map((item) => (
            <a
              href={item.href}
              className="font-nunito font-bold text-lg self-center border-b-4 border-transparent cursor-pointer hover:border-b-4 hover:border-black py-3 px-6"
            >
              {item.name}
              {""}
            </a>
          ))}
          <button className="font-nunito font-extrabold text-md bg-darkbrown px-4 py-3 ml-2 text-white rounded-full border-2 border-transparent hover:border-2 hover:border-darkbrown hover:bg-transparent hover:text-darkbrown mb-5">
            SAVE A FURIEND
          </button>
        </div>
      )}
    </>
  );
};

export default LandingNav;
