import { HiOutlineMenuAlt2 } from "react-icons/Hi";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleMenu = () => {
    setisOpen(true);
  };
  return (
    <>
      {isOpen ? (
        <nav>
          <li>Hare Krishna</li>
          <li>Hare Krishna</li>
          <li>Hare Krishna</li>
          <li>Hare Krishna</li>
        </nav>
      ) : (
        <nav className="list-none flex gap-3 ml-3 mt-3">
          <li
            className="text-3xl bg-blue-50 rounded-full w-10 h-10 p-1 "
            onClick={handleMenu}
          >
            <HiOutlineMenuAlt2 />
          </li>
          <li className="text-2xl">Assessment</li>
        </nav>
      )}
    </>
  );
};

export default Nav;
