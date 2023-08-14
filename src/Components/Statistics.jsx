import { AiOutlineSearch } from "react-icons/Ai";
import { MdFilterListAlt } from "react-icons/Md";
import { IoIosStats } from "react-icons/Io";

const Statistics = () => {
  return (
    <>
      <div className="flex justify-between mx-6 mt-5 text-2xl">
        <h1 className="font-semibold">My Assessment</h1>
        <div className="flex gap-2 text-3xl">
          <div className="">
            <AiOutlineSearch />
          </div>
          <div>
            <MdFilterListAlt />
          </div>
          <div>
            <IoIosStats />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
