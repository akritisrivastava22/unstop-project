import { HiOutlineMenuAlt2 } from "react-icons/Hi";
import { useState, useContext } from "react";

import { MenuContext } from "react-flexible-sliding-menu";
const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <>
      <nav className="list-none flex gap-3 ml-3 mt-3">
        <li
          className="text-3xl bg-blue-50 rounded-full w-10 h-10 p-1 "
          onClick={toggleMenu}
        >
          <HiOutlineMenuAlt2 />
        </li>
        <li className="text-2xl">Assessment</li>
      </nav>
    </>
  );
};

export default Nav;
