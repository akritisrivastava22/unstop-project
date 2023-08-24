import PropTypes from "prop-types";
import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/Fa";
import { BiSolidBarChartAlt2 } from "react-icons/Bi";
import { BsViewStacked, BsPeopleFill, BsGlobe } from "react-icons/Bs";
import { IoMdLink } from "react-icons/Io";

const Menu = () => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className="mx-4 my-6">
      <Stats showStats={showStats} />
      <div className="z-50 flex justify-between items-center text-lg">
        <h1 className="font-semibold md:text-xl">My Assessment</h1>
        <div className="flex gap-6 items-center md:hidden">
          <FaSearch />
          <FaFilter />
          <div
            className={`cursor-pointer p-2 border-blue-500 rounded-full ${
              showStats ? "border bg-blue-100 text-blue-500" : ""
            }`}
            onClick={() => setShowStats(!showStats)}
          >
            <BiSolidBarChartAlt2 />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats = ({ showStats }) => {
  return (
    <>
      <h1 className="hidden md:block mb-4 text-xl font-semibold">
        Assessments Overview
      </h1>
      <div
        className={`mt-2 overflow-hidden transition-all duration-500 mb-2 ${
          showStats
            ? "max-h-[300px]"
            : "max-h-[0] md:max-h-[360px] lg:max-h-[300px]"
        }`}
      >
        <div className="border-2 rounded-lg grid grid-cols-6 divide-x-2 divide-y-2 mb-4">
          <div className="p-2 lg:p-4 col-span-3 md:col-span-3 lg:col-span-1">
            <h3 className="font-semibold mb-2 md:mb-4 md:text-lg">
              Total Assessment
            </h3>
            <div className="flex items-center gap-3">
              <div className="bg-violet-200 text-violet-900 p-2 rounded-xl">
                <BsViewStacked className="text-xl" />
              </div>
              <h2 className="font-bold">34</h2>
            </div>
          </div>
          <div className="p-2 lg:p-4 col-span-3 md:col-span-3 lg:col-span-1 lg:order-last">
            <h3 className="font-semibold mb-2 md:mb-4 md:text-lg">
              Total Purpose
            </h3>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-900 p-2 rounded-xl">
                <IoMdLink className="text-xl" />
              </div>
              <h2 className="font-bold">11</h2>
            </div>
          </div>
          <div className="p-2 lg:p-4 col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold mb-2 md:mb-4 md:text-lg">
              Candidates
            </h3>
            <div className="flex items-center gap-3">
              <div className="bg-violet-200 text-violet-900 p-2 rounded-xl">
                <BsPeopleFill className="text-xl" />
              </div>
              <div>
                <div>
                  <span className="font-bold">11,145</span>
                  <span className="ml-1 text-[10px] text-green-500">+89</span>
                </div>
                <p className="text-[10px] -mt-1">Total Candidate</p>
              </div>
              <span className="inline-block bg-gray-200 w-[2px] h-8"></span>
              <div>
                <div>
                  <span className="font-bold">1,14</span>
                  <span className="ml-1 text-[10px] text-green-500">+89</span>
                </div>
                <p className="text-[10px] -mt-1">Who Attempted</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:p-4 col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="font-semibold mb-2 md:mb-4 md:text-lg">
              Candidates Source
            </h3>
            <div className="flex items-center gap-2">
              <div className="bg-pink-200 text-red p-2 rounded-xl">
                <BsGlobe className="text-xl" />
              </div>
              <div>
                <div>
                  <span className="font-bold">11,000</span>
                  <span className="ml-1 text-[10px] text-green-500">+89</span>
                </div>
                <p className="text-[10px] -mt-1">E-mail</p>
              </div>
              <span className="inline-block bg-gray-200 w-[2px] h-8"></span>
              <div>
                <div>
                  <span className="font-bold">11,000</span>
                  <span className="ml-1 text-[10px] text-green-500">+89</span>
                </div>
                <p className="text-[10px] -mt-1">Social Share</p>
              </div>
              <span className="inline-block bg-gray-200 w-[2px] h-8"></span>
              <div>
                <div>
                  <span className="font-bold">11,000</span>
                  <span className="ml-1 text-[10px] text-green-500">+89</span>
                </div>
                <p className="text-[10px] -mt-1">Unique Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Stats.propTypes = {
  showStats: PropTypes.bool.isRequired,
};

export default Menu;
