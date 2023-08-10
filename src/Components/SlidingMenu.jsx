import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { LuLayoutDashboard } from "react-icons/Lu";
import { BsClipboardCheck } from "react-icons/Bs";

const SlidingMenu = () => {
  const { closeMenu } = useContext(MenuContext);
  return (
    <>
      <button onClick={closeMenu} className="float-right mt-2 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <nav className="list-none ml-3 mt-2 pb-60 bg-blue-50">
        <li className="text-xl">Menu</li>
        <div className="mt-6 text-2xl ml-2">
          <li className="flex gap-2 items-center ">
            <LuLayoutDashboard />
            Dashboard
          </li>
          <li className="mt-9 flex gap-2 rounded-lg border-2 border-blue-200  py-2 items-center mr-3 ">
            <BsClipboardCheck />
            Assessment
          </li>
          <li className="">Hare Krishna</li>
          <li>Hare Krishna</li>
          <li>Hare Krishna</li>
        </div>
      </nav>
    </>
  );
};

export default SlidingMenu;
