import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { LuLayoutDashboard } from "react-icons/Lu";
import { BsClipboardCheck } from "react-icons/Bs";
import { MdOutlineLiveHelp } from "react-icons/Md";
import { PiLinkFill } from "react-icons/Pi";

const SlidingMenu = () => {
  const { closeMenu } = useContext(MenuContext);
  return (
    <>
      {/* Sliding Menu for Hamburger Menu */}
      <div className="w-[100vw] lg:hidden -z-10 h-full top-0 left-0 absolute bg-gray-800 opacity-50"></div>
      <nav className="md:bg-white z-50 list-none pl-3  md:px-3 pb-60 bg-blue-50 h-full w-80 lg:h-[100vh] md:max-w-[140px]">
        <div className="flex md:hidden justify-between pt-10">
          <li className="text-lg ">Menu</li>
          <button onClick={closeMenu} className="float-right mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className=""
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
        <div className="mt-8 text-xl ml-2">
          <li className="flex md:text-sm md:font-semibold md:flex-col gap-2 items-center ">
            <LuLayoutDashboard className="md:text-xl" />
            Dashboard
          </li>
          <div className="text-blue-600  mt-5 border-2 py-2 px-2 border-blue-300 bg-blue-100 mr-5 md:mr-0  -ml-2 rounded-lg ">
            <li className="flex gap-2 items-center md:font-semibold md:flex-col  md:text-sm">
              <BsClipboardCheck className="md:text-xl" />
              Assessment
            </li>
          </div>
          <li className="flex  md:text-sm md:flex-col md:font-semibold gap-2 items-center mt-5 ">
            <MdOutlineLiveHelp className="md:text-xl" />
            My Library
          </li>
          <hr className=" mt-5 mr-4 border-dashed border-1 border-gray-400" />
          <div className="flex md:flex-col-reverse justify-between items-center">
            <li className="flex  md:text-sm md:font-semibold md:flex-col gap-2 items-center mt-5">
              <PiLinkFill className="md:text-xl" />
              Round Status
            </li>
            <button className="mt-5 rounded-full border-2 border-red-500 px-3 text-sm bg-red-100 text-red-500 mr-2">
              Admin
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SlidingMenu;
