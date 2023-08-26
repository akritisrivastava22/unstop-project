import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SkillButton from "./SkillName";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NewAssessmentModal = ({ closeModal }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  if (showModal) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  const closeHandler = () => {
    setShowModal(!showModal);
    setTimeout(() => {
      closeModal();
    }, 300);
  };

  return (
    <>
      <div
        className="w-full h-full top-0 left-0 fixed bg-gray-800 opacity-50 inset-0 z-40"
        onClick={closeHandler}
      ></div>
      <div
        className={`w-full md:max-w-[500px] bottom-0 left-0 md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2
 md:inset-0 right-0 fixed flex justify-center items-center z-50 ease-in-out duration-300 ${
   showModal ? "translate-y-0 " : "translate-y-full"
 }`}
      >
        <div className="w-full bg-white rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg">Create new assessment</h3>
            <RxCross2 className="cursor-pointer" onClick={closeHandler} />
          </div>
          <hr className="-px-6 border-black" />
          <div className="flex flex-col gap-4 text-sm">
            <label className="-mb-2 font-semibold" htmlFor="assessmentName">
              Name of assessment
            </label>
            <input
              type="text"
              id="assessmentName"
              placeholder="Type Here"
              className="border border-gray-300 rounded-lg p-3"
            />
          </div>
          <div className="flex flex-col gap-4 text-sm relative">
            <label className="-mb-2 font-semibold" htmlFor="purpose">
              Purpose of the test is
            </label>
            <RiArrowDropDownLine className="absolute top-8 text-4xl right-2" />
            <select
              name="purpose"
              id="purpose"
              defaultValue={"Select"}
              className="border border-gray-300 rounded-lg p-3"
              disabled
            >
              <option value="" disabled selected>
                Select
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-4 text-sm relative">
            <label className="-mb-2 font-semibold" htmlFor="purpose">
              Description
            </label>
            <RiArrowDropDownLine className="absolute top-8 text-4xl right-2" />
            <select
              name="purpose"
              id="purpose"
              defaultValue={"Select"}
              className="border border-gray-300 rounded-lg p-3"
              disabled
            >
              <option value="" disabled selected>
                Select
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label className="-mb-2 font-semibold" htmlFor="assessmentDuration">
              Skills
            </label>
            <div className="border border-gray-300 rounded-lg p-3 flex gap-2 flex-wrap">
              <SkillButton skillName="UI/UX and Design" />
              <SkillButton skillName="Web Development" />
              <SkillButton skillName="UI/UX and Design" />
              <SkillButton skillName="No of Question" />
              <SkillButton skillName="Web Development" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="-mb-2" htmlFor="assessmentDuration">
              Assessment Duration
            </label>
            <input
              type="text"
              id="assessmentDuration"
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex bg-bg-gray w-full text-center">
            <button className="bg-blue-400 text-white grow p-2 rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAssessmentModal;

NewAssessmentModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
