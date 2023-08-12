import { HiOutlineMenuAlt2 } from "react-icons/Hi";
import { useState, useContext } from "react";

import { MenuContext } from "react-flexible-sliding-menu";
const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <>
      <nav className="list-none flex gap-3 ml-3 mt-3 ">
        <li
          className="text-3xl bg-blue-50 rounded-full w-10 h-10 p-1  "
          onClick={toggleMenu}
        >
          <HiOutlineMenuAlt2 />
        </li>
        <li className="text-xl font-semibold mt-2">Assessment</li>
      </nav>

      <div className="flex justify-between text-lg mt-5 mx-4 font-medium">
        <div className="text-blue-400 ">My Assessments</div>
        <div>Unstop Assessments</div>
      </div>
      <div class="w-full h-1 mt-2 bg-slate-200 rounded-full">
        <div
          class="bg-blue-400 h-full rounded-full"
          style={{ width: "46%" }}
        ></div>
      </div>
    </>
  );
};

export default Nav;
