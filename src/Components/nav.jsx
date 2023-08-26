import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useContext } from "react";

import { MenuContext } from "react-flexible-sliding-menu";
const Nav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <>
      {/* Nav Bar  */}
      <nav className="list-none flex gap-3 ml-3 mt-3 ">
        <li
          className="text-3xl bg-blue-50 rounded-full w-10 h-10 p-1 lg:hidden"
          onClick={toggleMenu}
        >
          <HiOutlineMenuAlt2 />
        </li>
        <li className="text-xl font-semibold mt-2 md:items-center">
          Assessment
        </li>
        <span className="md:w-[2px] mt-2 hidden md:block h-6 bg-slate-200"></span>
        <div className="hidden md:inline relative">
          <h3 className="text-blue-400 mt-2 font-semibold tracking-tight">
            My Assessments
          </h3>
          <div className="absolute w-32 -bottom-2 h-[3px] bg-blue-400"></div>
        </div>
      </nav>
      <hr className="md:mt-2 hidden md:block" />

      <div className=" md:hidden flex justify-between text-lg mt-5 mx-4 font-medium">
        <div className="text-blue-400 ">My Assessments</div>
        <div>Unstop Assessments</div>
      </div>
      <div className="md:hidden w-full h-1 mt-2 bg-slate-200 rounded-full">
        <div
          className="bg-blue-400 h-full rounded-full "
          style={{ width: "46%" }}
        ></div>
      </div>
    </>
  );
};

export default Nav;
